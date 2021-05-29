import { Request, Response } from "express";
import { ActiveUserUseCase } from './ActiveUserUseCase';

export class ActiveUserController {
  constructor(
    private create: ActiveUserUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.create.execute(id);

      return response.status(201).send();
    } catch (err) {
      return response.status(404).json({
        message: err.message || 'User not found.'
      })
    }
  }
}