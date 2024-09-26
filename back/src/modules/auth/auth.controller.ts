import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { TokenDTO, UserAuthDTO } from './dto';
import { ResponseErrorData } from 'src/shared/dto';

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
        response.send({ token });
      })
      .catch((e) =>
        response.status(HttpStatus.FORBIDDEN).send({
          status: e.status,
          message: e.message,
        }),
      );
  }
}
