import { Request, Response } from "express";
import { CreateAbstractUseCase } from "./CreateAbstractUseCase";

export class CreateAbstractController {
    constructor(
      private createAbstractUseCase: CreateAbstractUseCase,
    ) {}

    async handle(request:Request,response:Response):Promise<Response> {
        const {title,text,keywords,user} = request.body;

        try{
            await this.createAbstractUseCase.execute({
                title,
                text,
                keywords,
                user
            })
            return response.status(201).send();  
        }
        catch (err) {
            return response.status(400).json({
              message: err.message || 'Unexpected error.'
        })
    }


        return response.status(201).send();  
    }

}