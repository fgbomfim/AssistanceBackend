import { IPagedSearch } from "../../interfaces/IPagedSearch";
import { IUserRepository } from "../../repositories/IUserRepository";
import { FindUserDTO } from "./FindUserDTO";

export class FindUsersUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute({ page, size }: IPagedSearch): Promise<FindUserDTO[]> {
    return await this.userRepository.find(page, size);
  }
}
