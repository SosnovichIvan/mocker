import { HttpException, HttpStatus } from '@nestjs/common';

export class UserErrorLoginOrePassword extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
