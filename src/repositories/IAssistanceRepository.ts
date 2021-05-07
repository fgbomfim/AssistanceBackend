import { Assistance } from '../entities/Assistance';
import { PagedAssistance } from '../entities/PagedAssistance';

export interface IAssistanceRepository {
  find(page: number, size: number): Promise<Array<PagedAssistance>>;
  findById(id: string): Promise<Assistance>;
  save(assistance: Assistance): Promise<void>;
}