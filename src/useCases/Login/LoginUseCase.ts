import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IEncryptPassword } from "../../services/IEncryptPassword";
import { IEncode } from "../../services/IEncode";
import { ILoginRequestDTO, ISigned } from "./LoginDTO";
import jwt from 'jsonwebtoken';

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encryptPassword: IEncryptPassword,
    private encode: IEncode,
  ) {}

  async execute(data: ILoginRequestDTO): Promise<ISigned> {
    const user: User = await this.userRepository.auth(data.email);
    const hash = this.encryptPassword.encode(data.password);

    if (user?.password !== hash) {
      throw new Error('Bad credentials');
    } else {
      const token = await this.encode.encode({id: user.id, name: user.name}, 86400000);
      const signed: ISigned = {
        name: user.name,
        token: token,
        code: user.id,
      };

      return signed;
    }

  }
}
