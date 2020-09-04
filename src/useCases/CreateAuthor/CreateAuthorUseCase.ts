import { IAuthorsRepository } from "../../repositories/IAuthorsRepository";
import { ICreateAuthorRequestDTO } from "./CreateAuthorDTO";
import { Author } from "../../entities/Author";


export class CreateAuthorUseCase {
  constructor(
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute(data: ICreateAuthorRequestDTO) {
    
    const authorAlreadyExists = await this.authorsRepository.findByNameAndEmail(data.name, data.email);

    if (authorAlreadyExists) {
      throw new Error('Author already exists.')
    }
    
    const author = new Author(data);

    await this.authorsRepository.save(author);

  }
}