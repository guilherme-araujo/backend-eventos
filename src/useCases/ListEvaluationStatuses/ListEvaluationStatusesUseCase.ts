import { IEvaluationStatusRepository } from "../../repositories/IEvaluationStatusRepository";
import { EvaluationStatus } from "../../entities/EvaluationStatus";


export class ListEvaluationStatusesUseCase {
  constructor(
    private evaluationStatusRepository: IEvaluationStatusRepository
  ) {}

  async execute(): Promise<EvaluationStatus[]> {
    return this.evaluationStatusRepository.getAllEvaluationStatus();
  }
}