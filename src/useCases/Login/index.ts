import { UserRepository } from "../../repositories/impl/UserRepository";
import db from '../../../config/db';
import { EncryptPassword } from "../../services/implementation/EncryptPassword";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";
import { Encode } from '../../services/implementation/Encode';

const userRepository = new UserRepository(db);
const encryptPassword = new EncryptPassword();
const encode = new Encode();

const loginUseCase = new LoginUseCase(
  userRepository,
  encryptPassword,
  encode,
);

const loginController = new LoginController(loginUseCase);

export { loginController, loginUseCase }
