import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import db from '../../../database/connection';

export class SQLiteUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

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
    this.users.push(user);
  }
}