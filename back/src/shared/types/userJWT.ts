import { UserRole } from './user';

export type UserJWT = {
  id: string;
  login: string;
  password: string;
  role: UserRole;
};
