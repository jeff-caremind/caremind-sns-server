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
import { SECURITY_SERVICE, USER_SERVICE } from 'src/domain/service/ioc';
import { ISecurityService } from 'src/domain/service/security/security.service.interface';
import { IUserService } from 'src/domain/service/user/user.service.interface';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    @Inject(SECURITY_SERVICE)
    private readonly securityService: ISecurityService,
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
