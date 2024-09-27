import { get } from 'lodash';
import { Request } from 'express';
import { UserJWT } from 'src/shared/types';

export const getUserFromRequest = (req: Request): UserJWT =>
  get(req, 'user', null);
