import { IStatesRepository } from "../IStatesRepository";
import db from '../../../database/connection';
import { State } from "../../entities/State";

export class SQLiteStatesRepository implements IStatesRepository {
  
  async getAllStates(): Promise<State[]>{  
    return db
      .select()
      .from<State>("user_state")
      .then(rows => rows);
  }

}