import { IRegistrationTypesRepository } from "../IRegistrationTypesRepository";
import { RegistrationType } from "../../entities/RegistrationType";
import db from '../../../database/connection';

export class SQLiteRegistrationTypesRepository implements IRegistrationTypesRepository {
    
    async getAllRegistrationTypes(): Promise<RegistrationType[]>{  
        return db
          .select()
          .from<RegistrationType>("user_registration_type")
          .then(rows => rows);
      }
    
}