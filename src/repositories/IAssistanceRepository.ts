import { Assistance } from '../entities/Assistance';
import { AssistanceAndVisitors } from '../entities/AssistanceAndVisitors';
import { PagedAssistance } from '../entities/PagedAssistance';

export interface IAssistanceRepository {
  find(page: number, size: number): Promise<Array<PagedAssistance>>;
  findById(id: string): Promise<AssistanceAndVisitors>;
  save(assistance: Assistance): Promise<void>;
}