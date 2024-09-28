export type User = {
  id: string;
  login: string;
  password: string;
  name: string;
  profession: string;
  role: UserRole;
  email: string;
};

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}
