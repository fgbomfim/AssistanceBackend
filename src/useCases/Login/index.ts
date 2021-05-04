import { PostgresUserRepository } from "../../repositories/impl/PostgresUserRepository";
import db from '../../../config/db';
import { EncryptPassword } from "../../services/implementation/EncryptPassword";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";

const postgresUserRepository = new PostgresUserRepository(db);
const encryptPassword = new EncryptPassword();

const loginUseCase = new LoginUseCase(
  postgresUserRepository,
  encryptPassword,
);

const loginController = new LoginController(loginUseCase);

export { loginController, loginUseCase }
