import { IPagedSearch } from "../../interfaces/IPagedSearch";
import { IAssistanceRepository } from "../../repositories/IAssistanceRepository";
import { IPagedAssistanceDTO } from "./PagedSearchDTO";

export class PagedSearchUseCase {
  constructor(
    private assistanceRepository: IAssistanceRepository,
  ) {}

  async execute(data: IPagedSearch): Promise<IPagedAssistanceDTO[]> {
    return await this.assistanceRepository.find(data.page, data.size);
  }
}