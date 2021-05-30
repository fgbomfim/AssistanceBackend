import { Request, Response } from "express";
import { FindUserDTO } from "./FindUserDTO";
import { FindUsersUseCase } from './FindUsersUseCase';

export class FindUsersController {
  constructor(
    private useCase: FindUsersUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { page, size } = request.query;
    try {
      const users: FindUserDTO[] = await this.useCase.execute({page: Number(page), size: Number(size)});

      return response.status(200).send(users);
    } catch (err) {
      return response.status(404).json({
        message: err.message || 'User not found.'
      })
    }
  }
}