import { Request, Response } from "express";
import {LinkAbstractAuthorUseCase} from "./linkAbstractAuthorUseCase"

export class LinkAbstractAuthorController {
    constructor(
      private linkAbstractAuthorUseCase: LinkAbstractAuthorUseCase,
    ) {}

    async handle(request:Request,response:Response):Promise<Response> {
        const {abstract,author} = request.body;

        try{
            await this.linkAbstractAuthorUseCase.execute(
                abstract,
                author
            )
            return response.status(201).send();  
        }
        catch (err) {
            return response.status(400).json({
              message: err.message || 'Unexpected error.'
        })
    }
    }

}