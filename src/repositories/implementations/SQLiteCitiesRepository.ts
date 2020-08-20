import { ICitiesRepository } from "../ICitiesRepository";
import db  from '../../../database/connection'

export class SQLiteCitiesRepository implements ICitiesRepository {
  getAllCities(db){
    return db
      .select("*")
      .from("user_city")
      .then(rows => rows);
  }
}