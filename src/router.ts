import { request, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";
import { createAssistanceController } from "./useCases/CreateAssistance"
import { pagedSearchController } from "./useCases/PagedSearch";

const router = Router();

router
  .post('/users', (request, response) => {
    return createUserController.handle(request, response);
  })
  .post('/oauth2/v1/signin', (request, response) => {
    return loginController.handle(request, response);
  })
  .post('/assistances', (request, response) => {
    return createAssistanceController.handle(request, response);
  })
  .get('/assistances', (request, response) => {
    return pagedSearchController.handle(request, response);
  });

export { router }
