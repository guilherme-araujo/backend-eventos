import { Router } from "express";

//CREATE
import { createUserController } from "./useCases/CreateUser";
import { createPaymentController } from "./useCases/CreatePayment";
import { createAbstractController } from "./useCases/CreateAbstract";
import { createEvaluationController } from "./useCases/CreateEvaluation";
import { createAuthorController } from "./useCases/CreateAuthor";
import { createInstitutionController } from "./useCases/CreateInstitution";


//LIST
import {listAuthorsController} from "./useCases/ListAuthors";
import {listCitiesController} from "./useCases/ListCities";
import {listStatesController} from "./useCases/ListStates";
import {listCountriesController} from "./useCases/ListCountries";
import {listEvaluationStatusesController} from "./useCases/ListEvaluationStatuses";
import {listInstitutionsController} from "./useCases/ListInstitutions";
import {listPaymentSituationsController} from "./useCases/ListPaymentSituations";
import {listRegistrationTypesController} from "./useCases/ListRegistrationTypes";

//OTHERS
import { linkAbstractAuthorController } from "./useCases/linkAbstractAuthor";
import { loginController } from "./useCases/Login";

const router = Router()


router.post('/login', (request, response) => {
  return loginController.handle(request, response);
})

router.post('/token', (request, response) => {
  return loginController.newToken(request, response);
})

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/hidden', loginController.authenticateJWT, (request, response) => {
  response.send("Ok!")
})

router.post('/payments', (request, response) => {
  return createPaymentController.handle(request, response);
});

router.get('/situations', (request, response) => {
  listPaymentSituationsController.handle(request, response);
});

router.post('/abstracts',(request,response)=>{
  return createAbstractController.handle(request,response);
});

router.post('/linkAbstractAuthor',(request,response)=>{
  return linkAbstractAuthorController.handle(request,response);
})

router.post('/evaluations', (request, response) => {
  return createEvaluationController.handle(request, response);
});

router.get('/status', (request, response) => {
  listEvaluationStatusesController.handle(request, response);
});

router.post('/authors', (request, response) => {
  return createAuthorController.handle(request, response);
});

router.get('/authors', (request, response) => {
  listAuthorsController.handle(request, response);
});

router.post('/institutions', (request, response) => {
  return createInstitutionController.handle(request, response);
});

router.get('/institutions', (request, response) => {
  listInstitutionsController.handle(request, response);
});

router.get('/types', (request, response) => {
  listRegistrationTypesController.handle(request, response);
});

router.get('/cities', (request, response) => {
  listCitiesController.handle(request, response);
});

router.get('/countries', (request, response) => {
  listCountriesController.handle(request, response);
});

router.get('/states', (request, response) => {
  listStatesController.handle(request, response);
});

export { router }