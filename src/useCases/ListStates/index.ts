import { SQLiteStatesRepository } from "../../repositories/implementations/SQLiteStatesRepository";
import { ListStatesUseCase } from "./ListStatesUseCase";
import { ListStatesController } from "./ListStatesController";

const sqliteStatesRepository = new SQLiteStatesRepository()


const listStatesUseCase = new ListStatesUseCase(
    sqliteStatesRepository,
)

const listStatesController = new ListStatesController(
    listStatesUseCase,
)

export { listStatesUseCase, listStatesController }