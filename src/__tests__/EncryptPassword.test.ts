import { IEncryptPassword } from "../services/IEncryptPassword"
import { EncryptPassword } from "../services/implementation/EncryptPassword"

describe('EncryptPassword.ts', () => {
  const encryptPassword = new EncryptPassword();

  it('should return encrypted password', () => {
    const encrypted = encryptPassword.encode('1234');
    console.log(encrypted);

    expect(encrypted).not.toEqual(undefined);
  })
})