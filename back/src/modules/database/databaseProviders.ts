import { Sequelize } from "sequelize-typescript";
import { Users } from "./entity";

export const databaseProviders = [
	{
		provide: "SEQUELIZE",
		useFactory: async () => {
            const sequelize = new Sequelize({
                host: process.env.BD_HOST,
                port: Number(process.env.DB_PORT),
                dialect: "postgres",
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_BASE_NAME,
            })
			sequelize.addModels([Users]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
