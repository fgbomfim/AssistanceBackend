import { UserRepository } from "../../repositories/impl/UserRepository";
import { FindUsersUseCase } from './FindUsersUseCase';
import { FindUsersController } from './FindUsersController'
import db from '../../../config/db';

const userRepository = new UserRepository(db);

const findUsersUseCase = new FindUsersUseCase(userRepository);

const findUsersController = new FindUsersController(findUsersUseCase);

export { findUsersUseCase, findUsersController }
