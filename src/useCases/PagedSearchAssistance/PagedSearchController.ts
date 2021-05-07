import { Request, Response } from "express";
import { IPagedAssistanceDTO } from "./PagedSearchDTO";
import { PagedSearchUseCase } from "./PagedSearchUseCase";

export class PagedSearchController {
  constructor(
    private pagedSearchUseCase: PagedSearchUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { page, size } = request.query;

    try {
      const pagedAssistance: IPagedAssistanceDTO[] = await this.pagedSearchUseCase.execute({page: Number(page), size: Number(size)});

      return response.status(200).send(pagedAssistance);
    } catch (error) {

    }
  }
}