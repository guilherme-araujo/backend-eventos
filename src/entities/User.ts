import { v4 } from 'uuid'
//Verificar geração de ids através do sqlite. Como fazer na geração de um novo usuário?
//Após ser gerado, buscar o id a partir do banco.
//Pode valer a pena usar essa estratégia do uuid para ter um id independente do banco?

import { Country } from "./Country";
import { State } from "./State";
import { City } from "./City";

export class User {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  public course: string;
  public phone: string;
  public country: Country;
  public state: State;
  public city: City;
  public address: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}