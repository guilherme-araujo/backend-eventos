import { Request, Response } from "express";
import { ListPaymentSituationsUseCase } from "./ListPaymentSituationsUseCase";

export class ListPaymentSituationsController {
  constructor(
    private listPaymentSituationsUseCase: ListPaymentSituationsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const paymentSituations = await this.listPaymentSituationsUseCase.execute();
  
      return response.send(paymentSituations);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}