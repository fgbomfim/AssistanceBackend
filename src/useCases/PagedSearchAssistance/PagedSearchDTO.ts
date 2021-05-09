export interface IVisitorDTO {
  id: string;
  name: string;
}

export interface IPagedAssistanceDTO {
  id: string;
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
  date: string;
  visitors?: Visitor[]
}
