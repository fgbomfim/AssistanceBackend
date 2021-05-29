import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private create: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { email, name, password } = request.body;

    try {
      await this.create.execute({ email, name, password });

      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}