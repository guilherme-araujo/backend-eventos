import { IAbstractRepository } from "../../repositories/IAbstractRepository";
import { Abstract } from "../../entities/Abstract";
import { Author } from "../../entities/Author";

export class LinkAbstractAuthorUseCase {
    constructor(
        private abstractRepository: IAbstractRepository
    ) {}

    async execute(abstract:Abstract, author:Author) {

       await this.abstractRepository.linkAbstractAuthor(abstract,author);
   }

}