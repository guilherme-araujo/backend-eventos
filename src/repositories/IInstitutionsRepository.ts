import { Institution } from "../entities/Instituition";

export interface IInstitutionsRepository {
  save(institution: Institution): Promise<void>;
  getAllInstitutions(): Promise<Institution[]>;
  findByNameAndAbbreviation(name: string, abbreviation: string): Promise<Institution>;
}