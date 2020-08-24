import { IStatesRepository } from "../IStatesRepository";
import db from '../../../database/connection';

export class SQLiteStatesRepository implements IStatesRepository {
  
  getAllStates(){  
    return db
      .select("*")
      .from("user_state")
      .then(rows => rows);
  
  }

}