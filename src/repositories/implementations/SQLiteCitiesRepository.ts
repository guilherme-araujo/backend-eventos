import { ICitiesRepository } from "../ICitiesRepository";
const knex = require('knex')('development')

export class SQLiteCitiesRepository implements ICitiesRepository {
  
  getAllCities(db){  
    return knex(db)
      .select("*")
      .from("user_city")
      .then(rows => rows);
  
  }

}