import { Request, Response } from "express";
import { ListCountriesUseCase } from "./ListCountriesUseCase";

export class ListCountriesController {
  constructor(
    private listCountriesUseCase: ListCountriesUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const countries = await this.listCountriesUseCase.execute();
  
      return response.send(countries);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}