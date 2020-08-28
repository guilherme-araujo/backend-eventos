import { SQLiteEvaluationsRepository } from "../../repositories/implementations/SQLiteEvaluationsRepository";
import { CreateEvaluationUseCase } from "./CreateEvaluationUseCase";
import { CreateEvaluationController } from "./CreateEvaluationController";

const sqliteEvaluationsRepository = new SQLiteEvaluationsRepository()


const createEvaluationUseCase = new CreateEvaluationUseCase(
  sqliteEvaluationsRepository,
)

const createEvaluationController = new CreateEvaluationController(
  createEvaluationUseCase,
)

export { createEvaluationUseCase, createEvaluationController }