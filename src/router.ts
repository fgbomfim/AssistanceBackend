import { request, Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";
import { createAssistanceController } from "./useCases/CreateAssistance"
import { pagedSearchController } from "./useCases/PagedSearchAssistance";
import { SearchAssistanceUseCase } from "./useCases/SearchAssistance/SearchAssistanceUseCase";
import { searchAssistanceController } from "./useCases/SearchAssistance";

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
  })
  .get('/assistances/:id', (request, response) => {
    return searchAssistanceController.handle(request, response);
  });


export { router }
