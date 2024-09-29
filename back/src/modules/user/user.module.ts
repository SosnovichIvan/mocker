import { Module } from '@nestjs/common';
import { UserRepository } from './user.repositories';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.provider';

@Module({
  imports: [],
  providers: [UserRepository, UserService, ...userProviders],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
