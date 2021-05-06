import { request, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";
import { createAssistanceController } from "./useCases/CreateAssistance"

const router = Router();

router
  .post('/users', (request, response) => {
    return createUserController.handle(request, response);
  })
  .post('/oauth2/vi/signup', (request, response) => {
    return loginController.handle(request, response);
  })
  .post('/assistance', (request, response) => {
    return createAssistanceController.handle(request, response);
  });

export { router }
