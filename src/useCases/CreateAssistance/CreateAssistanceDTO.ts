import { IAssistance } from "../../interfaces/IAssistance";

interface IVisitorDTO {
  name: string;
}

export interface IAssistanceDTO extends IAssistance {
  visitors: IVisitorDTO[];
}