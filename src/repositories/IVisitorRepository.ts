import { Visitor } from "@babel/traverse";

export interface IVisitorRepository {
  find(idAssistance: string): Promise<Array<Visitor>>;
}