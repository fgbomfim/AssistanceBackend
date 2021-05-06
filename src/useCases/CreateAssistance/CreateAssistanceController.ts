import { Request, Response } from "express";
import { CreateAssistanceUseCase } from "./CreateAssistanceUseCase";

export class CreateAssistanceController {
  constructor(
    private create: CreateAssistanceUseCase,
  ) {}


  async handle(request: Request, response: Response) {
    const {
      girls,
      boys,
      littleLady,
      youthMan,
      elders,
      deacons,
      officialCoWorker,
      youthCoWorker,
      localSupervisors,
      regionalSupervisors,
      musician,
      youthAssistant,
      auxiliaryDoors,
      brotherhood,
      visitors,
      date,
    } = request.body;

    try {
      await this.create.execute({
        girls: Number(girls),
        boys: Number(boys),
        littleLady: Number(littleLady),
        youthMan: Number(youthMan),
        elders: Number(elders),
        deacons: Number(deacons),
        officialCoWorker: Number(officialCoWorker),
        youthCoWorker: Number(youthCoWorker),
        localSupervisors: Number(localSupervisors),
        regionalSupervisors: Number(regionalSupervisors),
        musician: Number(musician),
        youthAssistant: Number(youthAssistant),
        auxiliaryDoors: Number(auxiliaryDoors),
        brotherhood: Number(brotherhood),
        visitors,
        date,
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}