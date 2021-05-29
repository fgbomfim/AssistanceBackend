import { UserRepository } from "../../repositories/impl/UserRepository";
import { ActiveUserUseCase } from './ActiveUserUseCase';
import { ActiveUserController } from './ActiveUserController'
import db from '../../../config/db';

const userRepository = new UserRepository(db);

const activeUserUseCase = new ActiveUserUseCase(userRepository);

const activeUserController = new ActiveUserController(activeUserUseCase);

export { activeUserUseCase, activeUserController }
