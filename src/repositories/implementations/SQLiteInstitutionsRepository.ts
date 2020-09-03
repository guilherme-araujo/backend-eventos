import db from '../../../database/connection';
import { IInstitutionsRepository } from '../IInstitutionsRepository';
import { Institution } from '../../entities/Instituition';

export class SQLiteInstitutionsRepository implements IInstitutionsRepository {
  async save(institution: Institution): Promise<void> {
    db('user_institution').insert({
      "name": institution.name,
      "abbreviation": institution.abbreviation
    }).then(function(){});
  }

  async getAllInstitutions(): Promise<Institution[]>{  
    return db
      .select()
      .from<Institution>("user_institution")
      .then(rows => rows);
  }
  
}