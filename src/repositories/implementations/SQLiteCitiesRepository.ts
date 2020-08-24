import { ICitiesRepository } from "../ICitiesRepository";
import db from '../../../database/connection';
import { City } from "../../entities/City";

export class SQLiteCitiesRepository implements ICitiesRepository {
  
  async getAllCities(): Promise<City[]>{  
    return db
      .select()
      .from<City>("user_city")
      .then(rows => rows);
  }

}