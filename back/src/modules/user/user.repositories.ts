import { Injectable, Logger } from '@nestjs/common';
import { UserNotFoundException } from 'src/shared/exceptions';
import { UserAuthDTO } from '../auth/dto';
import { User, UserRole } from 'src/shared/types';

@Injectable()
export class UserRepository {
  private readonly logger = new Logger(UserRepository.name);
  private userBD: Record<string, User> = {
    ivan: {
      id: 'dasdasd',
      login: 'test',
      password:
        '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      name: 'Ivan',
      profession: 'Developer',
      role: UserRole.SUPER_ADMIN,
      email: 'test',
    },
  };

  constructor() {}

  userAuth(data: UserAuthDTO) {
    const { login, password } = data;
    this.logger.log('Поиск пользователя в базе данных по логину: ' + login);

    const user = this.userBD[login];

    if (!user) {
      this.logger.error(
        `В базе данных пользователь по логину: ${login} не найден`,
      );

      throw new UserNotFoundException('user not found');
    }

    if (password !== user.password) {
      this.logger.error(`Не совпадают пароли по логину: ${login}`);
      throw Error('user ore password error');
    }

    this.logger.debug('Пользователь найден и пароли совпадают');

    return user;
  }
}
