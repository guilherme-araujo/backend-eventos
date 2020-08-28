import { Request, Response } from "express";
import { CreateEvaluationUseCase } from "./CreateEvaluationUseCase";

export class CreateEvaluationController {
  constructor(
    private createEvaluationUseCase: CreateEvaluationUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { abstract, status} = request.body;

    try {
      await this.createEvaluationUseCase.execute({
        abstract,
        status,
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}