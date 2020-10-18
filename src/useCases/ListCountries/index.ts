import { SQLiteCountriesRepository } from "../../repositories/implementations/SQLiteCountriesRepository";
import { ListCountriesUseCase } from "./ListCountriesUseCase";
import { ListCountriesController } from "./ListCountriesController";

const sqliteCountriesRepository = new SQLiteCountriesRepository()


const listCountriesUseCase = new ListCountriesUseCase(
    sqliteCountriesRepository,
)

const listCountriesController = new ListCountriesController(
    listCountriesUseCase,
)

export { listCountriesUseCase, listCountriesController }