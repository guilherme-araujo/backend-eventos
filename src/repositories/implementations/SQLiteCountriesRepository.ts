import { ICountriesRepository } from "../ICountriesRepository";
import db from '../../../database/connection';

export class SQLiteCountriesRepository implements ICountriesRepository {
  
  getAllCountries(){  
    return db
      .select("*")
      .from("user_country")
      .then(rows => rows);
  
  }

}