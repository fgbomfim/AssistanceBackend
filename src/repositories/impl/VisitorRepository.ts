import { Knex } from "knex";
import { Visitor } from '../../entities/Visitor';
import { IVisitorRepository } from '../IVisitorRepository';

export class VisitorRepository implements IVisitorRepository {
  constructor(
    private db: Knex,
  ) {}

  async save(visitor: Visitor): Promise<void> {
    try {
      await this.db('visitors').insert({
        id: visitor.id,
        assistanceId: visitor.assistanceId,
        name: visitor.name,
      });
    } catch(e) {
      console.log(e);

      return Promise.reject('Error when insert visitor');
    }

  }

  async find(idAssistance: string): Promise<Visitor[]> {
    return await this.db('visitors').where('assistanceId', idAssistance).select<Visitor[]>();
  }

}