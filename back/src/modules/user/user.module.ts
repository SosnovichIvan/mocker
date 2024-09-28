import { Module } from '@nestjs/common';
import { UserRepository } from './user.repositories';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UserRepository, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
