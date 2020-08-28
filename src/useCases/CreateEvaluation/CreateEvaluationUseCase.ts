import { IEvaluationsRepository } from "../../repositories/IEvaluationsRepository";
import { ICreateEvaluationRequestDTO } from "./CreateEvaluationDTO";
import { Evaluation } from "../../entities/Evaluation";

export class CreateEvaluationUseCase {
  constructor(
    private evaluationsRepository: IEvaluationsRepository
  ) {}

  async execute(data: ICreateEvaluationRequestDTO) {
    const evaluation = new Evaluation(data);

    await this.evaluationsRepository.save(evaluation);

  }
}