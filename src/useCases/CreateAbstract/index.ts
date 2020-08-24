import { CreateAbstractUseCase } from "./CreateAbstractUseCase";
import { CreateAbstractController } from "./CreateAbstractController";
import { SQLiteAbstractRepository } from "../../repositories/implementations/SQLiteAbstractRepository";
import { SQLiteUsersRepository } from "../../repositories/implementations/SQLiteUsersRepository";

const sqliteAbstractsRepository = new SQLiteAbstractRepository()
const sqliteUsersRepository = new SQLiteUsersRepository()

const createAbstractUseCase = new CreateAbstractUseCase(sqliteUsersRepository,sqliteAbstractsRepository)

const createAbstractController = new CreateAbstractController(
  createAbstractUseCase
)

export { createAbstractUseCase, createAbstractController }