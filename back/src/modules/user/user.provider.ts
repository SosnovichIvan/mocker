import { Users } from "modules/database";

export const USER_REPOSITORI_NAME = "Users";

export const userProviders = [
	{
		provide: USER_REPOSITORI_NAME,
		useValue: Users,
	},
];
