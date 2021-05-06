import { Visitor } from "../entities/Visitor";

export interface IVisitorRepository {
  find(idAssistance: string): Promise<Array<Visitor>>;
  save(visitor: Visitor): Promise<void>;
}