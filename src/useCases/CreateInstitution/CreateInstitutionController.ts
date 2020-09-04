import { Request, Response } from "express";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

export class CreateInstitutionController {
  constructor(
    private createInstitutionUseCase: CreateInstitutionUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, abbreviation} = request.body;

    try {
      await this.createInstitutionUseCase.execute({
        name,
        abbreviation
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}