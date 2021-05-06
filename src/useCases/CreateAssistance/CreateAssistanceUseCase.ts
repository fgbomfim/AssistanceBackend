import { Assistance } from '../../entities/Assistance';
import { Visitor } from '../../entities/Visitor';
import {IAssistanceRepository} from '../../repositories/IAssistanceRepository';
import {IVisitorRepository} from '../../repositories/IVisitorRepository';
import { IAssistanceDTO } from './CreateAssistanceDTO';

export class CreateAssistanceUseCase {
  constructor(
    private assistanceRepository: IAssistanceRepository,
    private visitorRepository: IVisitorRepository,
  ) {}

  async execute(data: IAssistanceDTO) {
    const assistance = new Assistance(data);

    await this.assistanceRepository.save(assistance);

    await data.visitors.forEach(async (visit) => {
      const visitor = new Visitor({
        assistanceId: assistance.id,
        name: visit.name,
      });

      await this.visitorRepository.save(visitor);
    })
  }
}