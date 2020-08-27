import { Request, Response } from "express";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

export class CreatePaymentController {
  constructor(
    private createPaymentUseCase: CreatePaymentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user, status, transaction_code, obs} = request.body;

    try {
      await this.createPaymentUseCase.execute({
        user,
        status,
        transaction_code,
        obs,
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}