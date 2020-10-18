import { Institution } from "../../entities/Institution";

export interface ICreateAuthorRequestDTO {
  name: string;
  email: string;
  institution: Institution;
}
