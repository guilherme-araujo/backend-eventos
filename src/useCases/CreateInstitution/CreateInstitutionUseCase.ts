import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";
import { ICreateInstitutionRequestDTO } from "./CreateInstitutionDTO";
import { Institution } from "../../entities/Instituition";

export class CreateInstitutionUseCase {
  constructor(
    private institutionsRepository: IInstitutionsRepository
  ) {}

  async execute(data: ICreateInstitutionRequestDTO) {
    const institution = new Institution(data);

    await this.institutionsRepository.save(institution);

  }
}