import db from '../../../database/connection';
import { IAuthorsRepository } from '../IAuthorsRepository';
import { Author } from '../../entities/Author';


export class SQLiteAuthorsRepository implements IAuthorsRepository {
  async save(author: Author): Promise<void> {
    db('author').insert({
      "name": author.name,
      "email": author.email,
      "institution_id": author.institution.id
    }).then(function(){});
  }

  async getAllAuthors(): Promise<Author[]>{  
    return db
      .select()
      .from<Author>("author")
      .then(rows => rows);
  }
  
  async findByNameAndEmail(name: string, email: string): Promise<Author> {
    
    const authorsArray: Author[] = await Promise.all(await this.getAllAuthors());

    const author = authorsArray.find(author => author.email === email && author.name === name);

    return author;
  }
  
}