import { USER_REPOSITORI_NAME } from "modules/user/user.provider";
import { Sequelize, InferCreationAttributes, InferAttributes } from "sequelize";
import { Table, Column, Model, DataType } from "sequelize-typescript";
import { UserRole } from "shared/types";

@Table({ freezeTableName: true, tableName: USER_REPOSITORI_NAME, createdAt: false, updatedAt: false })
export class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>> {
	@Column({
		type: DataType.UUID,
		unique: true,
		defaultValue: Sequelize.literal('gen_random_uuid()'),
	})
	id: string;

	@Column({
		type: DataType.STRING,
		unique: {
			name: 'login',
			msg: 'login alredy use'
		},
		primaryKey: true,
	})
	login: string;

	@Column({
		type: DataType.STRING,
		unique: true,
	})
	password: string;

	@Column({
		type: DataType.ENUM,
		values: [
			UserRole.ADMIN,
			UserRole.MODERATOR,
			UserRole.SUPER_ADMIN,
			UserRole.USER,
		],
	})
	role: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		validate: {
			isEmail: true
		}
	})
	email: string;
}
