import { Assistance } from "../../entities/Assistance";
import { AssistanceAndVisitors } from "../../entities/AssistanceAndVisitors";
import { AssistanceRepository } from "../../repositories/impl/AssistanceRepository";

export class SearchAssistanceUseCase {
  constructor(
    private assistanceRepository: AssistanceRepository
  ) {}

  async execute(id: string): Promise<AssistanceAndVisitors> {
    return await this.assistanceRepository.findById(id);
  }
}