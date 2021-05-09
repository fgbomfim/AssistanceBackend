import db from '../../../config/db';
import { AssistanceRepository } from '../../repositories/impl/AssistanceRepository';
import { VisitorRepository } from '../../repositories/impl/VisitorRepository';
import { PagedSearchUseCase } from './PagedSearchUseCase';
import { PagedSearchController } from './PagedSearchController';

const assistanceRepository = new AssistanceRepository(db);
const visitorRepository = new VisitorRepository(db);

const pagedSearchUseCase = new PagedSearchUseCase(assistanceRepository, visitorRepository);

const pagedSearchController = new PagedSearchController(pagedSearchUseCase);

export { pagedSearchUseCase, pagedSearchController };