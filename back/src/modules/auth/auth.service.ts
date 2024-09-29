import { Inject, Injectable, Logger, forwardRef } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { User, UserJWT } from "shared/types";
import { UserService } from "../user/user.service";
import { UserAuthDTO, UserRegisterDTO } from "shared/dto/auth";

@Injectable()
export class AuthService {
	private readonly logger = new Logger(AuthService.name);

	constructor(
		private jwtService: JwtService,
		@Inject(forwardRef(() => UserService)) private _userService: UserService
	) {}

	async userAuth(data: UserAuthDTO) {
		const { login } = data;
		this.logger.debug(
			`Пришел запрос на авторизацию пользователя по логину: ${login}`
		);

		const user = await this._userService.userAuth(data);

		const token = await this.getUserToken(user);

		return token;
	}

	async userRegister(data: UserRegisterDTO) {
		const { login } = data;
		this.logger.debug(
			`Пришел запрос на регистрацию пользователя по логину: ${login}`
		);

		const user = await this._userService.userRegister(data);

		return this.jwtService.sign(user)
	}

	async getUserToken({ id, password, login, role }: User) {
		const tokenData: UserJWT = {
			id,
			password,
			login,
			role,
		};

		return this.jwtService.sign(tokenData);
	}
}
