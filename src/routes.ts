import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { SQLiteCitiesRepository } from "./repositories/implementations/SQLiteCitiesRepository";
import { createAbstractController } from "./useCases/CreateAbstract";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/abstracts',(request,response)=>{
  return createAbstractController.handle(request,response);
})

router.get('/cities', (request, response) => {
  
  const cidades = new SQLiteCitiesRepository
  
  cidades.getAllCities().then(data => {
    response.send(data)
  })
});

export { router }