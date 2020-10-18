import { IAuthorsRepository } from "../../repositories/IAuthorsRepository";
import { Author } from "../../entities/Author";


export class ListAuthorsUseCase {
  constructor(
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute(): Promise<Author[]> {
    return this.authorsRepository.getAllAuthors();
  }
}