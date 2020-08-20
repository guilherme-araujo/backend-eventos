import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { SQLiteCitiesRepository } from "./repositories/implementations/SQLiteCitiesRepository";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/cities', (request, response) => {
  const db = request.app.get("db")
  const cidades = new SQLiteCitiesRepository
 
  cidades.getAllCities(db).then(data => {
    response.send(data)
  })
});

export { router }