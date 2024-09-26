import { HttpStatus } from '@nestjs/common';
import { ResponseErrorData } from 'src/shared/dto';

export const error: ResponseErrorData = {
  code: HttpStatus.UNAUTHORIZED,
  message: 'error user validate',
};
