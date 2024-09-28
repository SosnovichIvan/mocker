import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repositories';

import { UserJWT } from 'src/shared/types';
import { UserAuthDTO } from '../auth/dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private _userRepository: UserRepository) {}

  async userAuth(data: UserAuthDTO) {
    return this._userRepository.userAuth(data);
  }

  async _validateUser(data: UserJWT) {
    return this._userRepository.userAuth(data);
  }
}
