import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { UserRepository } from './user.repositories';

import { UserJWT } from 'shared/types';
import { UserAuthDTO, UserRegisterDTO } from 'shared/dto/auth';
import { UserNotFoundException } from 'shared/exceptions';

@Injectable()
export class UserService {
	private readonly logger = new Logger(UserService.name);

  constructor(private _userRepository: UserRepository) {}

  async userAuth(data: UserAuthDTO) {
  const { login, password } = data

    this.logger.debug(`Пришел запрос на атворизацию пользователя под логиным: ${login}`);

    const user = await this._userRepository.userAuth(data);

    if (!user) {
      this.logger.error(
				`В базе данных пользователь по логину: ${login} не найден`
			);

			throw new UserNotFoundException("user not found");
    }

		const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
			this.logger.error(`Не совпадают пароли по логину: ${login}`);
			throw Error("user ore password error");
		}

		this.logger.debug("Пользователь найден и пароли совпадают");

    return await this._userRepository.userAuth(data);
  }

  async userRegister(data: UserRegisterDTO) {
    return await this._userRepository.userRegister(data);
  }

  async _validateUser(data: UserJWT) {
    const newUser = await this._userRepository.userAuth(data);
    
    return newUser
  }
}
