import { PostgresUserRepository } from "../../repositories/impl/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import db from '../../../config/db';
import { EncryptPassword } from "../../services/implementation/EncryptPassword";

const postgresUserRepository = new PostgresUserRepository(db);
const encryptPassword = new EncryptPassword();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  encryptPassword,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }
