import { EvaluationStatus } from "../entities/EvaluationStatus";

export interface IEvaluationStatusRepository {
    getAllEvaluationStatus(): Promise<EvaluationStatus[]>
}