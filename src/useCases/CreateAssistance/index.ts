import db from '../../../config/db';
import { AssistanceRepository } from '../../repositories/impl/AssistanceRepository';
import { VisitorRepository } from '../../repositories/impl/VisitorRepository';
import { CreateAssistanceController } from './CreateAssistanceController';
import { CreateAssistanceUseCase } from './CreateAssistanceUseCase';


const assistanceRepository = new AssistanceRepository(db);
const visitorRepository = new VisitorRepository(db);

const createAssistanceUseCase = new CreateAssistanceUseCase(
  assistanceRepository, visitorRepository,
);

const createAssistanceController = new CreateAssistanceController(createAssistanceUseCase);

export { createAssistanceUseCase, createAssistanceController };
