import { Request, Response } from "express";
import { ISigned } from "./LoginDTO";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  constructor(
    private login: LoginUseCase,
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const user: ISigned = await this.login.execute({ email, password });

      return response.status(201).send(user);
    } catch (err) {
      return response.status(401).json({
        message: err.message || 'Bad credentials.'
      })
    }
  }
}