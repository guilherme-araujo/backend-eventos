import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import db from '../../../database/connection';

export class SQLiteUsersRepository implements IUsersRepository {
  
  async getAllUsers(): Promise<User[]> {
    return db.select().from<User>('users').then(rows => rows);
  }

  //testar se essa função funciona como esperado
  private users: Promise<User[]> = this.getAllUsers();

  async findByEmail(email: string): Promise<User> {
    
    const usersArray: User[] = await Promise.all(await this.users);

    const user = usersArray.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    db('users').insert({
      "name": user.name,
      "email": user.email,
      "password": user.password,
      "course" : user.course,
      "adress" : user.address, 
      "phone" : user.phone,
      //foreign keys
      "city_id": user.city.id,
      "state_id": user.state.id,
      "country_id": user.country.id,
      "registration_type_id": user.registrationType.id
    }).then(function(){});
  }
}