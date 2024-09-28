import { Inject, Injectable, Logger, forwardRef } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserJWT } from 'src/shared/types';
import { UserService } from '../user/user.service';
import { UserAuthDTO } from './dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService)) private _userService: UserService,
  ) {}

  async userAuth(data: UserAuthDTO) {
    const { login } = data;
    this.logger.debug(
      `Пришел запрос на авторизацию пользователя по логину: ${login}`,
    );

    const user = await this._userService.userAuth(data);

    const { id, password, role } = user;

    const tokenData: UserJWT = {
      id,
      password,
      login,
      role,
    };

    const token = this.jwtService.sign(tokenData);

    return token;
  }
}
