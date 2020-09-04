import { IAuthorsRepository } from "../../repositories/IAuthorsRepository";
import { ICreateAuthorRequestDTO } from "./CreateAuthorDTO";
import { Author } from "../../entities/Author";


export class CreateAuthorUseCase {
  constructor(
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute(data: ICreateAuthorRequestDTO) {
    const author = new Author(data);

    await this.authorsRepository.save(author);

  }
}