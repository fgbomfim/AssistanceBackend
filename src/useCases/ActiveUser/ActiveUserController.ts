import { Request, Response } from "express";
import { ActiveUserUseCase } from './ActiveUserUseCase';

export class ActiveUserController {
  constructor(
    private useCase: ActiveUserUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    console.log(id);

    try {
      await this.useCase.execute(id);

      return response.status(201).send();
    } catch (err) {
      return response.status(404).json({
        message: err.message || 'User not found.'
      })
    }
  }
}