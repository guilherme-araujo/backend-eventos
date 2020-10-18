import { Request, Response } from "express";
import { ListEvaluationStatusesUseCase } from "./ListEvaluationStatusesUseCase";

export class ListEvaluationStatusesController {
  constructor(
    private listEvaluationStatusesUseCase: ListEvaluationStatusesUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const evaluationStatuses = await this.listEvaluationStatusesUseCase.execute();
  
      return response.send(evaluationStatuses);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}