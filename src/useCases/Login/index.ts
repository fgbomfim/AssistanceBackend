import { PostgresUserRepository } from "../../repositories/impl/PostgresUserRepository";
import db from '../../../config/db';
import { EncryptPassword } from "../../services/implementation/EncryptPassword";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";
import { Encode } from '../../services/implementation/Encode';

const postgresUserRepository = new PostgresUserRepository(db);
const encryptPassword = new EncryptPassword();
const encode = new Encode();

const loginUseCase = new LoginUseCase(
  postgresUserRepository,
  encryptPassword,
  encode,
);

const loginController = new LoginController(loginUseCase);

export { loginController, loginUseCase }
