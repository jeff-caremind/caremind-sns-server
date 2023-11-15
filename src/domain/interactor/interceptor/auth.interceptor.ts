import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { USER_SERVICE } from 'src/domain/service/ioc';
import { IUserService } from 'src/domain/service/user/user.service.interface';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private readonly JwtService: JwtService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.headers['authorization'];
    try {
      const decoded = this.JwtService.verify(token!);
      const userId = decoded.aud;
      const user = await this.userService.getOne(userId);
      if (!user)
        throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
      req.headers['userId'] = userId;
      return next.handle();
    } catch (error) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
  }
}
