import { SQLiteCitiesRepository } from "../../repositories/implementations/SQLiteCitiesRepository";
import { ListCitiesUseCase } from "./ListCitiesUseCase";
import { ListCitiesController } from "./ListCitiesController";

const sqliteCitiesRepository = new SQLiteCitiesRepository()


const listCitiesUseCase = new ListCitiesUseCase(
    sqliteCitiesRepository,
)

const listCitiesController = new ListCitiesController(
    listCitiesUseCase,
)

export { listCitiesUseCase, listCitiesController }