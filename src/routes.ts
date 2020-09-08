import { Router } from "express";

// controllers
import { createUserController } from "./useCases/CreateUser";
import { createPaymentController } from "./useCases/CreatePayment";
import { createAbstractController } from "./useCases/CreateAbstract";
import { createEvaluationController } from "./useCases/CreateEvaluation";
import { linkAbstractAuthorController } from "./useCases/linkAbstractAuthor";
import { createAuthorController } from "./useCases/CreateAuthor";
import { createInstitutionController } from "./useCases/CreateInstitution";

// repositórios
import { SQLiteAuthorsRepository } from "./repositories/implementations/SQLiteAuthorsRepository";
import { SQLiteInstitutionsRepository } from "./repositories/implementations/SQLiteInstitutionsRepository";
import { loginController } from "./useCases/Login";
import { SQLitePaymentSituationsRepository } from "./repositories/implementations/SQLitePaymentSituationsRepository";
import { SQLiteEvaluationStatusRepository } from "./repositories/implementations/SQLiteEvaluationStatus";
import { SQLiteCountriesRepository } from "./repositories/implementations/SQLiteCountriesRepository";
import { SQLiteStatesRepository } from "./repositories/implementations/SQLiteStatesRepository";
import { SQLiteCitiesRepository } from "./repositories/implementations/SQLiteCitiesRepository";
import { SQLiteRegistrationTypesRepository } from "./repositories/implementations/SQLiteRegistrationTypesRepository";

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
  
  const situacoes = new SQLitePaymentSituationsRepository
  
  situacoes.getAllPaymentSituations().then(data => {
    response.send(data)
  })
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
  
  const status = new SQLiteEvaluationStatusRepository
  
  status.getAllEvaluationStatus().then(data => {
    response.send(data)
  })
});

router.post('/authors', (request, response) => {
  return createAuthorController.handle(request, response);
});

router.get('/authors', (request, response) => {
  
  const autores = new SQLiteAuthorsRepository
  
  autores.getAllAuthors().then(data => {
    response.send(data)
  })
});

router.post('/institutions', (request, response) => {
  return createInstitutionController.handle(request, response);
});

router.get('/institutions', (request, response) => {
  
  const instituicoes = new SQLiteInstitutionsRepository
  
  instituicoes.getAllInstitutions().then(data => {
    response.send(data)
  })
});

router.get('/types', (request, response) => {
  
  const inscricoes = new SQLiteRegistrationTypesRepository
  
  inscricoes.getAllRegistrationTypes().then(data => {
    response.send(data)
  })
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