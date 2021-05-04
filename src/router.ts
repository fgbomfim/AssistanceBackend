import { request, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";

const router = Router();

router
  .post('/users', (request, response) => {
    return createUserController.handle(request, response);
  })
  .post('/oauth2/vi/signup', (request, response) => {
    return loginController.handle(request, response);
  });

export { router }
