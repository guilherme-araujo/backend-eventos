import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";
import { Institution } from "../../entities/Institution";


export class ListInstitutionsUseCase {
  constructor(
    private institutionRepository: IInstitutionsRepository
  ) {}

  async execute(): Promise<Institution[]> {
    return this.institutionRepository.getAllInstitutions();
  }
}