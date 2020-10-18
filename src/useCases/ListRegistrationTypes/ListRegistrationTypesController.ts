import { Request, Response } from "express";
import { ListRegistrationTypeUseCase } from "./ListRegistrationTypesUseCase";

export class ListRegistrationTypeController {
  constructor(
    private listRegistrationTypeUseCase: ListRegistrationTypeUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const registrationTypes = await this.listRegistrationTypeUseCase.execute();
  
      return response.send(registrationTypes);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}