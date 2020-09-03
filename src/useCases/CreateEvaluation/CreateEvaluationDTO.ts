import { Abstract } from "../../entities/Abstract";
import { EvaluationStatus } from "../../entities/EvaluationStatus";

export interface ICreateEvaluationRequestDTO {
  abstract: Abstract;
  status: EvaluationStatus;
  observation?: string;
}
