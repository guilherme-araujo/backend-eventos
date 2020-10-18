import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";
import { ICreateInstitutionRequestDTO } from "./CreateInstitutionDTO";
import { Institution } from "../../entities/Institution";

export class CreateInstitutionUseCase {
  constructor(
    private institutionsRepository: IInstitutionsRepository
  ) {}

  async execute(data: ICreateInstitutionRequestDTO) {
    
    const institutionAlreadyExists = await this.institutionsRepository.findByNameAndAbbreviation(data.name, data.abbreviation);

    if (institutionAlreadyExists) {
      throw new Error('Institution already exists.')
    }
    
    const institution = new Institution(data);

    await this.institutionsRepository.save(institution);

  }


}