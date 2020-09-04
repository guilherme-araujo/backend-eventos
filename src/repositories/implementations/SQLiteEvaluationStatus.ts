import { IEvaluationStatusRepository } from "../IEvaluationStatusRepository";
import db from '../../../database/connection';
import { EvaluationStatus } from "../../entities/EvaluationStatus";

export class SQLiteEvaluationStatusRepository implements IEvaluationStatusRepository {
  
  async getAllEvaluationStatus(): Promise<EvaluationStatus[]>{  
    return db
      .select()
      .from<EvaluationStatus>("user_evaluation_status")
      .then(rows => rows);
  }

}