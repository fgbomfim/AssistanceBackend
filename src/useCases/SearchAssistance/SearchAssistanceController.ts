import { Request, Response } from "express";
import { AssistanceAndVisitors } from "../../entities/AssistanceAndVisitors";
import { SearchAssistanceUseCase } from "./SearchAssistanceUseCase";

export class SearchAssistanceController {
  constructor(
    private searchAssistanceUseCase: SearchAssistanceUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id);

    try {
      const assistance: AssistanceAndVisitors = await this.searchAssistanceUseCase.execute(id);

      response.status(200).send(assistance);
    } catch (error) {

    }
  }
}