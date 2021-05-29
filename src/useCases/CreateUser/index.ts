import { UserRepository } from "../../repositories/impl/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import db from '../../../config/db';
import { EncryptPassword } from "../../services/implementation/EncryptPassword";

const userRepository = new UserRepository(db);
const encryptPassword = new EncryptPassword();

const createUserUseCase = new CreateUserUseCase(
  userRepository,
  encryptPassword,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }
