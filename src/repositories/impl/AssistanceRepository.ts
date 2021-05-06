import { Knex } from "knex";
import { Assistance } from "../../entities/Assistance";
import { IAssistanceRepository } from "../IAssistanceRepository";

export class AssistanceRepository implements IAssistanceRepository {
  constructor(
    private db: Knex,
  ) {}

  async find(page: number, size: number): Promise<Assistance[]> {
    const offset = (page - 1) * size;

    return await this.db.select("*").from("assistance.assistance").offset(offset).limit(size);
  }
  findById(id: string): Promise<Assistance> {
    return this.db('assistance').where('id', id).select<Assistance>().first();
  }

  async save(assistance: Assistance): Promise<void> {
    try {
      await this.db('assistance').insert({
        id: assistance.id,
        boys: assistance.boys,
        girls: assistance.girls,
        littleLady: assistance.littleLady,
        youthMan: assistance.youthMan,
        elders: assistance.elders,
        deacons: assistance.deacons,
        officialCoWorker: assistance.officialCoWorker,
        youthCoWorker: assistance.youthCoWorker,
        localSupervisors: assistance.localSupervisors,
        regionalSupervisors: assistance.regionalSupervisors,
        musician: assistance.musician,
        youthAssistant: assistance.youthAssistant,
        auxiliaryDoors: assistance.auxiliaryDoors,
        brotherhood: assistance.brotherhood,
        date: assistance.date,
      });
    } catch(e) {
      console.log(e);

      return Promise.reject('Error when insert assistance');
    }
  }
}