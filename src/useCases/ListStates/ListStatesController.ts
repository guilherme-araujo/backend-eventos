import { Request, Response } from "express";
import { ListStatesUseCase } from "./ListStatesUseCase";

export class ListStatesController {
  constructor(
    private listStatesUseCase: ListStatesUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const states = await this.listStatesUseCase.execute();
  
      return response.send(states);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}