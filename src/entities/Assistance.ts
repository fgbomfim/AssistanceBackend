import { uuid } from "uuidv4";

export class Assistance {
  public id: string;
  public girls: number;
  public boys: number;
  public littleLady: number;
  public youthMan: number;
  public elders: number;
  public deacons: number;
  public officialCoWorker: number;
  public youthCoWorker: number;
  public localSupervisors: number;
  public regionalSupervisors: number;
  public musician: number;
  public youthAssistant: number;
  public auxiliaryDoors: number;
  public brotherhood: number;
  public date: string;

  constructor(props: Omit<Assistance, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}