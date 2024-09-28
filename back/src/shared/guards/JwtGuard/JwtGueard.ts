import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { error } from './error';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const token = this.extractTokenFromCookies(request);
      const payload = await this.jwtService.verifyAsync(token);

      request['user'] = payload;
    } catch (e) {
      throw new UnauthorizedException(error);
    }
    return true;
  }

  private extractTokenFromCookies(request: Request): string | undefined {
    return request?.cookies?.SID || null;
  }
}
