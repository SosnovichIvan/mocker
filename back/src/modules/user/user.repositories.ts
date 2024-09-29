import { Inject, Injectable, Logger } from "@nestjs/common";
import { UserNotFoundException } from "shared/exceptions";
import { UserAuthDTO, UserRegisterDTO } from "shared/dto/auth";
import { User, UserJWT, UserRole } from "shared/types";
import * as bcrypt from "bcrypt";
import { USER_REPOSITORI_NAME } from "./user.provider";
import { Users } from "modules/database";
import { CREATE_USER, FIND_USER_WITH_LOGIN } from "./sql";
import { QueryTypes } from "sequelize";
import { get } from "lodash";

@Injectable()
export class UserRepository {
	private readonly logger = new Logger(UserRepository.name);
	constructor(@Inject(USER_REPOSITORI_NAME) private repositori: typeof Users) {}

	async userAuth(data: UserAuthDTO) {
		const { login, password } = data;
		this.logger.log("Поиск пользователя в базе данных по логину: " + login);

		const [userWithLogin] = (await this.repositori.sequelize.query(
			FIND_USER_WITH_LOGIN,
			{
				replacements: { login },
				type: QueryTypes.SELECT,
			}
		)) as User[];

		return userWithLogin;
	}

	async userRegister(data: UserRegisterDTO): Promise<UserJWT> {
		const { login, password, email } = data;

		try {
			const cryproPassword = await bcrypt.hash(password, 10);

			const saveData = await this.repositori.sequelize.query(CREATE_USER, {
				replacements: {
					login,
					password: cryproPassword,
					role: UserRole.USER,
					email,
				},
				type: QueryTypes.INSERT,
			});

			const id = get(saveData, "0.id", "");

			return {
				password: cryproPassword,
				login,
				role: UserRole.USER,
				id,
			};
		} catch (e) {
			throw Error(e.toString());
		}
	}
}
