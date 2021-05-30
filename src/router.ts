import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";
import { createAssistanceController } from "./useCases/CreateAssistance"
import { pagedSearchController } from "./useCases/PagedSearchAssistance";
import { searchAssistanceController } from "./useCases/SearchAssistance";
import { activeUserController } from "./useCases/ActiveUser";
import { findUsersController } from "./useCases/FindUsers";

const router = Router();

router
  .post('/users/signup', (request, response) => {
    return createUserController.handle(request, response);
  })
  .get('/users', (request, response) => {
    return findUsersController.handle(request, response);
  })
  .put('/users/:id/active', (request, response) => {
    return activeUserController.handle(request, response);
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
