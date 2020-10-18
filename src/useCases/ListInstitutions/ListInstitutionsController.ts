import { Request, Response } from "express";
import { ListInstitutionsUseCase } from "./ListInstitutionsUseCase";

export class ListInstitutionsController {
  constructor(
    private listInstitutionsUseCase: ListInstitutionsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const institutions = await this.listInstitutionsUseCase.execute();
  
      return response.send(institutions);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}