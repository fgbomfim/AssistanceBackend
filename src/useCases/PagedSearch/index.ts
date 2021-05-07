import db from '../../../config/db';
import { AssistanceRepository } from '../../repositories/impl/AssistanceRepository';
import { PagedSearchUseCase } from './PagedSearchUseCase';
import { PagedSearchController } from './PagedSearchController';

const assistanceRepository = new AssistanceRepository(db);

const pagedSearchUseCase = new PagedSearchUseCase(assistanceRepository);

const pagedSearchController = new PagedSearchController(pagedSearchUseCase);

export { pagedSearchUseCase, pagedSearchController };