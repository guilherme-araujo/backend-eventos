import { Evaluation } from "../entities/Evaluation";

export interface IEvaluationsRepository {
  save(evaluation: Evaluation): Promise<void>;
}