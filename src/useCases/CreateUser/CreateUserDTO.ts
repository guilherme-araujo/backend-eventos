import { City } from "../../entities/City";
import { State } from "../../entities/State";
import { Country } from "../../entities/Country";
import { RegistrationType } from "../../entities/RegistrationType";

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
  course: string;
  phone: string;
  country: Country;
  state: State;
  city: City;
  address: string;
  registrationType: RegistrationType;
}
