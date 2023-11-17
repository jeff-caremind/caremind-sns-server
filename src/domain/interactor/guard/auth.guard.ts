import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { SECURITY_SERVICE } from 'src/domain/service/ioc';
import { ISecurityService } from 'src/domain/service/security/security.service.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(SECURITY_SERVICE)
    private readonly securityService: ISecurityService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers['authorization'];
    try {
      const decoded = this.securityService.verify(token!);
      const userId = decoded.aud;
      req.user = userId;
      return true;
    } catch (error) {
      return false;
    }
  }
}
