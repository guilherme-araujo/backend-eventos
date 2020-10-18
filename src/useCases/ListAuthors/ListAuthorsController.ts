import { Request, Response } from "express";
import { ListAuthorsUseCase } from "./ListAuthorsUseCase";

export class ListAuthorsController {
  constructor(
    private listAuthorsUseCase: ListAuthorsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {    

    try {
      const authors = await this.listAuthorsUseCase.execute();
  
      return response.send(authors);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}