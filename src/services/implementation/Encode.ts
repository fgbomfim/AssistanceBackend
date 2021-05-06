import jwt from 'jsonwebtoken';
import { IEncode } from "../IEncode";
import { ISigned } from "../ISigned";

export class Encode implements IEncode {
  private SALT_KEY: string = '13a9e750-c699-4309-92d2-20d3968c954d';

  encode(signed: ISigned, time: number): string {
    console.log(signed);
    return jwt.sign(signed, this.SALT_KEY, {
      expiresIn: time
    });
  }

  decode: <T>(encoded: string) => T;
}