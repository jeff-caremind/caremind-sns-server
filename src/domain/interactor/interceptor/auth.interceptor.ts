import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { USER_SERVICE } from 'src/domain/service/ioc';
import { SecurityServiceImpl } from 'src/domain/service/security/impl/security.service.implement';
import { IUserService } from 'src/domain/service/user/user.service.interface';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    private readonly securityService: SecurityServiceImpl,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.headers['authorization'];
    try {
      const decoded = this.securityService.verify(token!);
      const userId = decoded.aud;
      const user = await this.userService.getOne(userId);
      if (!user)
        throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
      this.securityService.setUserId(userId);
      return next.handle().pipe(tap(() => this.securityService.setUserId(0)));
    } catch (error) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }
  }
}