import { Institution } from "../../entities/Instituition";

export interface ICreateAuthorRequestDTO {
  name: string;
  email: string;
  institution: Institution;
}
