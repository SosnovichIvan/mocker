import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto';
import { Roles } from 'src/shared/guards/rolesGuard/decorator';
import { UserRole } from 'src/shared/types';
import { Response } from 'express';
import { JwtAuthGuard, RolesGuard } from 'src/shared/guards';

@ApiTags('user contorller')
@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private _userService: UserService) {}

  @Post('')
  @ApiBody({ type: CreateUserDTO })
  @ApiResponse({ status: HttpStatus.OK })
  @Roles([UserRole.SUPER_ADMIN])
  createUser(@Body() createUserDto: CreateUserDTO, @Res() response: Response) {
    response.sendStatus(HttpStatus.OK);
  }
}
