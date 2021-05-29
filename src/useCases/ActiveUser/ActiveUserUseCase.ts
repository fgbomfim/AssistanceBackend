import { IUserRepository } from "../../repositories/IUserRepository";

export class ActiveUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string) {
    await this.userRepository.active(id);
  }
}
