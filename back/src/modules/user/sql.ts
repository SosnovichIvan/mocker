import { USER_REPOSITORI_NAME } from "./user.provider"

export const CREATE_USER = `
INSERT INTO "${USER_REPOSITORI_NAME}" (login, password, role, email)
VALUES (:login, :password, :role, :email) RETURNING id;
`

export const FIND_USER_WITH_LOGIN = `
SELECT * FROM "${USER_REPOSITORI_NAME}"
WHERE login = :login OR email = :login;`