import { SQLiteAuthorsRepository } from "../../repositories/implementations/SQLiteAuthorsRepository";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";
import { CreateAuthorController } from "./CreateAuthorController";

const sqliteAuthorsRepository = new SQLiteAuthorsRepository()


const createAuthorUseCase = new CreateAuthorUseCase(
  sqliteAuthorsRepository,
)

const createAuthorController = new CreateAuthorController(
  createAuthorUseCase,
)

export { createAuthorUseCase, createAuthorController }