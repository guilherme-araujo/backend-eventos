import { ICountriesRepository } from "../ICountriesRepository";
import db from '../../../database/connection';
import { Country } from "../../entities/Country";

export class SQLiteCountriesRepository implements ICountriesRepository {
  
  async getAllCountries(): Promise<Country[]>{  
    return db
      .select()
      .from<Country>("user_country")
      .then(rows => rows);
  }

}