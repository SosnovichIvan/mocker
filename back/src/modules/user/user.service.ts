import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repositories';

import { UserJWT } from 'shared/types';
import { UserAuthDTO, UserRegisterDTO } from 'shared/dto/auth';

@Injectable()
export class UserService {
  constructor(private _userRepository: UserRepository) {}

  async userAuth(data: UserAuthDTO) {
    return await this._userRepository.userAuth(data);
  }

  async userRegister(data: UserRegisterDTO) {
    return await this._userRepository.userRegister(data);
  }

  async _validateUser(data: UserJWT) {
    return this._userRepository.userAuth(data);
  }
}
