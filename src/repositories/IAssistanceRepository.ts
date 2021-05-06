import { Assistance } from '../entities/Assistance';

export interface IAssistanceRepository {
  find(page: number, size: number): Promise<Array<Assistance>>;
  findById(id: string): Promise<Assistance>;
  save(assistance: Assistance): Promise<void>;
}