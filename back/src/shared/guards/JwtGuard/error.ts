import { HttpStatus } from '@nestjs/common';
import { ResponseErrorData } from 'shared/dto';

export const error: ResponseErrorData = {
  code: HttpStatus.UNAUTHORIZED,
  messages: 'error user validate',
};
