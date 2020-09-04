import { Author } from "../entities/Author";

export interface IAuthorsRepository {
  save(author: Author): Promise<void>;
  getAllAuthors(): Promise<Author[]>
  findByNameAndEmail(name: string, email: string): Promise<Author>;
}