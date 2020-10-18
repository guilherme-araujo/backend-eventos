import { SQLiteAuthorsRepository } from "../../repositories/implementations/SQLiteAuthorsRepository";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";
import { ListAuthorsController } from "./ListAuthorsController";

const sqliteAuthorsRepository = new SQLiteAuthorsRepository()


const listAuthorsUseCase = new ListAuthorsUseCase(
    sqliteAuthorsRepository,
)

const listAuthorsController = new ListAuthorsController(
    listAuthorsUseCase,
)

export { listAuthorsUseCase, listAuthorsController }