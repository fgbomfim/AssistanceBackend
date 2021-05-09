import { Assistance } from '../entities/Assistance';
import { AssistanceAndVisitors } from '../entities/AssistanceAndVisitors';

export interface IAssistanceRepository {
  find(page: number, size: number): Promise<Array<Assistance>>;
  findById(id: string): Promise<AssistanceAndVisitors>;
  save(assistance: Assistance): Promise<void>;
}