import { User } from "../../entities/User";
import { UserStateEnum } from "../../entities/UserStateEnum";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IEncryptPassword } from "../../services/IEncryptPassword";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encryptPassword: IEncryptPassword
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists?.id) {
      throw new Error("User already exists");
    }

    const hash = await this.encryptPassword.encode(data.password);

    const user = new User({
      ...data,
      password: hash,
      status: UserStateEnum.INACTIVE,
    });

    console.log('users', user);


    await this.userRepository.save(user);
  }
}
