import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createPaymentController } from "./useCases/CreatePayment";
import { createAbstractController } from "./useCases/CreateAbstract";
import { SQLiteCountriesRepository } from "./repositories/implementations/SQLiteCountriesRepository";
import { SQLiteStatesRepository } from "./repositories/implementations/SQLiteStatesRepository";
import { SQLiteCitiesRepository } from "./repositories/implementations/SQLiteCitiesRepository";
import { createEvaluationController } from "./useCases/CreateEvaluation";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/users/payments', (request, response) => {
  return createPaymentController.handle(request, response);
});

router.post('/abstracts',(request,response)=>{
  return createAbstractController.handle(request,response);
});

router.post('/abstracts/evaluations', (request, response) => {
  return createEvaluationController.handle(request, response);
});

router.get('/cities', (request, response) => {
  
  const cidades = new SQLiteCitiesRepository
  
  cidades.getAllCities(request.query.state as string).then(data => {
    response.send(data)
  })
});

router.get('/countries', (request, response) => {
  
  const paises = new SQLiteCountriesRepository
  
  paises.getAllCountries().then(data => {
    response.send(data)
  })
});

router.get('/states', (request, response) => {
  
  const estados = new SQLiteStatesRepository
  
  estados.getAllStates().then(data => {
    response.send(data)
  })
});

export { router }