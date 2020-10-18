import { Request, Response } from "express";
import { ListCitiesUseCase } from "./ListCitiesUseCase";

export class ListCitiesController {
  constructor(
    private listCitiesUseCase: ListCitiesUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    
    //const id = request.params.id;
    const id = request.query.state as string;

    try {
      const cities = await this.listCitiesUseCase.execute(id);
  
      return response.send(cities);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}