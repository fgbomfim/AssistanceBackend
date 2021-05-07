import db from '../../../config/db';
import { AssistanceRepository } from '../../repositories/impl/AssistanceRepository';
import { SearchAssistanceController } from './SearchAssistanceController';
import { SearchAssistanceUseCase } from './SearchAssistanceUseCase';

const assistanceRepository = new AssistanceRepository(db);

const searchAssistanceUseCase = new SearchAssistanceUseCase(assistanceRepository);

const searchAssistanceController = new SearchAssistanceController(searchAssistanceUseCase);

export { searchAssistanceUseCase, searchAssistanceController }