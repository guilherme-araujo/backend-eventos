import { SQLiteEvaluationStatusRepository } from "../../repositories/implementations/SQLiteEvaluationStatus";
import { ListEvaluationStatusesUseCase } from "./ListEvaluationStatusesUseCase";
import { ListEvaluationStatusesController } from "./ListEvaluationStatusesController";

const sqliteEvaluationStatusRepository = new SQLiteEvaluationStatusRepository()


const listEvaluationStatusesUseCase = new ListEvaluationStatusesUseCase(
    sqliteEvaluationStatusRepository,
)

const listEvaluationStatusesController = new ListEvaluationStatusesController(
    listEvaluationStatusesUseCase,
)

export { listEvaluationStatusesUseCase, listEvaluationStatusesController }