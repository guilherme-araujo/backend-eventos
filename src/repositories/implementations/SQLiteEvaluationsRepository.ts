import { IEvaluationsRepository } from "../IEvaluationsRepository";
import { Evaluation } from "../../entities/Evaluation";
import db from '../../../database/connection';

export class SQLiteEvaluationsRepository implements IEvaluationsRepository {
  async save(evaluation: Evaluation): Promise<void> {
    db('user_evaluation').insert({
      "observation": evaluation.observation,
      "abstract_id": evaluation.abstract.id,
      "evaluation_status_id": evaluation.status.id   
    }).then(function(){});
  }
}