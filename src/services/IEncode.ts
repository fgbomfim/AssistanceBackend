import { ISigned } from "./ISigned";

export interface IEncode {
  encode: (signed: ISigned, time: number) => string;
  decode: <T>(encoded: string) => T;
}