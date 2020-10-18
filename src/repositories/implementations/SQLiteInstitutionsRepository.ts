import db from '../../../database/connection';
import { IInstitutionsRepository } from '../IInstitutionsRepository';
import { Institution } from '../../entities/Institution';

export class SQLiteInstitutionsRepository implements IInstitutionsRepository {
    async save(institution: Institution): Promise<void> {
      const allInstitutions:Institution[] = await this.getAllInstitutions(); 
      const newInstitutionCheck = (allInstitutions.find(each_institution => each_institution.name.toLocaleUpperCase() == institution.name.toLocaleUpperCase()))
      //console.log(newInstitutionCheck)
      if( newInstitutionCheck == undefined){
        db('user_institution').insert({
          "name": institution.name,
          "abbreviation": institution.abbreviation
      }).then(function(){});
    }
  }

  async getAllInstitutions(): Promise<Institution[]>{  
    return db
      .select()
      .from<Institution>("user_institution")
      .then(rows => rows);
  }

  async findByNameAndAbbreviation(name: string, abbreviation: string): Promise<Institution> {
    
    const institutionsArray: Institution[] = await Promise.all(await this.getAllInstitutions());

    const institution = institutionsArray.find(institution => institution.name === name && institution.abbreviation === abbreviation);

    return institution;
  }
  
}