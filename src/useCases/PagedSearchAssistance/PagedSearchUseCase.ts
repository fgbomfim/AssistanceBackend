import { Visitor } from "../../entities/Visitor";
import { IPagedSearch } from "../../interfaces/IPagedSearch";
import { IAssistanceRepository } from "../../repositories/IAssistanceRepository";
import { IVisitorRepository } from "../../repositories/IVisitorRepository";
import { IPagedAssistanceDTO } from "./PagedSearchDTO";

export class PagedSearchUseCase {
  constructor(
    private assistanceRepository: IAssistanceRepository,
    private visitorRepository: IVisitorRepository,
  ) {}

  async execute({ page, size }: IPagedSearch): Promise<IPagedAssistanceDTO[]> {
    const assistance = await this.assistanceRepository.find(page, size);

    for (let index = 0; index < assistance.length; index++) {
      assistance[index].visitors = await this.execVisitor(assistance[index].id);
    }

    return assistance;
  }

  async execVisitor(assistanceId: string): Promise<Visitor[]> {
    return await this.visitorRepository.find(assistanceId);
  }
}