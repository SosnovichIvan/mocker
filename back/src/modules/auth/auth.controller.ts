import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { TokenDTO, UserAuthDTO, UserRegisterDTO } from 'shared/dto/auth';
import { ResponseErrorData } from 'shared/dto';

@ApiTags('auth contorller')
@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('/')
  @ApiBody({ type: UserAuthDTO })
  @ApiResponse({ status: HttpStatus.OK, type: TokenDTO })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, type: ResponseErrorData })
  userAuth(@Body() userAuth: UserAuthDTO, @Res() response: Response) {
    this._authService
      .userAuth(userAuth)
      .then((token) => {
        response.cookie("SID", token).sendStatus(HttpStatus.OK)
      })
      .catch((e) =>
        response.status(HttpStatus.FORBIDDEN).send({
          status: e.status,
          message: e.message,
        }),
      );
  }

  @Post('/register')
  @ApiBody({ type: UserRegisterDTO })
  @ApiResponse({ status: HttpStatus.OK, type: TokenDTO })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, type: ResponseErrorData })
  userRegister(@Body() userRegister: UserRegisterDTO, @Res() response: Response) {
    this._authService
      .userRegister(userRegister)
      .then((token) => {
        response.cookie("SID", token).sendStatus(HttpStatus.OK)
      })
      .catch((e) =>
        response.status(HttpStatus.FORBIDDEN).send({
          status: e.status,
          message: e.message,
        }),
      );
  }
}
