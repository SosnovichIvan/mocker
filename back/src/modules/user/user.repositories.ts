import { Injectable, Logger } from "@nestjs/common";
import { UserNotFoundException } from "shared/exceptions";
import { UserAuthDTO, UserRegisterDTO } from "shared/dto/auth";
import { User, UserRole } from "shared/types";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserRepository {
	private readonly logger = new Logger(UserRepository.name);
	private userBD: User[] = [
		{
			id: "dasdasd",
			login: "test333",
			password: "$2b$10$2Wng7CO/uHEXACYprgKXY.MYXqcmiMogaw5mEgGr/4dR/l308faxy",
			role: UserRole.SUPER_ADMIN,
			email: "test1@mail.ru",
		},
	];

	constructor() {}

	async userAuth(data: UserAuthDTO) {
		const { login, password } = data;
		this.logger.log("Поиск пользователя в базе данных по логину: " + login);

		const user = this.userBD.find(
			(x) => x.email === login || x.login === login
		);

		if (!user) {
			this.logger.error(
				`В базе данных пользователь по логину: ${login} не найден`
			);

			throw new UserNotFoundException("user not found");
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			this.logger.error(`Не совпадают пароли по логину: ${login}`);
			throw Error("user ore password error");
		}

		this.logger.debug("Пользователь найден и пароли совпадают");

		return user;
	}

	async userRegister(data: UserRegisterDTO) {
		const { login, password, email } = data;
		this.logger.log("Поиск пользователя в базе данных по логину: " + login);

		const userWithLogin = this.userBD.find((x) => x.login === login);

		if (userWithLogin) {
			this.logger.error(
				`В базе данных пользователь по логину: ${login} уже есть`
			);

			throw new UserNotFoundException("Логин уже занят");
		}

		const userWithEmail = this.userBD.find((x) => x.email === email);

		if (userWithEmail) {
			this.logger.error(
				`В базе данных пользователь по email: ${email} уже есть`
			);
			throw Error("Email уже занят");
		}

		const cryproPassword = await bcrypt.hash(password, 10);

		this.logger.debug("Пароль зашифрован сохраняем в базе");

		const newUser: User = {
			login,
			email,
			password: cryproPassword,
			role: UserRole.USER,
			id: `${this.userBD.length}`,
		};

		this.userBD.push(newUser);

		return newUser;
	}
}
