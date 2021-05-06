import md5 from 'md5';
import { IEncryptPassword } from "../IEncryptPassword";

type callback = (password: string) => string;

export class EncryptPassword implements IEncryptPassword {
  encode(password: string): string {
    const hash = md5(`${process.env.SALT_KEY}${password}`);

    return hash;
  };
}