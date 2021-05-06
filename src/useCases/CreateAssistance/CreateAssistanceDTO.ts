export interface IVisitorDTO {
  name: string;
}

export interface IAssistanceDTO {
  girls: number;
  boys: number;
  littleLady: number;
  youthMan: number;
  elders: number;
  deacons: number;
  officialCoWorker: number;
  youthCoWorker: number;
  localSupervisors: number;
  regionalSupervisors: number;
  musician: number;
  youthAssistant: number;
  auxiliaryDoors: number;
  brotherhood: number;
  visitors: IVisitorDTO[];
  date: string;
}