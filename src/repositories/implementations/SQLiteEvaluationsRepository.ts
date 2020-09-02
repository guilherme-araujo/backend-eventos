import { IEvaluationsRepository } from "../IEvaluationsRepository";
import { Evaluation } from "../../entities/Evaluation";
import db from '../../../database/connection';

export class SQLiteEvaluationsRepository implements IEvaluationsRepository {
  async save(evaluation: Evaluation): Promise<void> {
    db('user_evaluation').insert({
      "abstract": evaluation.abstract.id,
      "status": evaluation.status.status,
      "observation": evaluation.observation
    }).then(function(){});
  }
}