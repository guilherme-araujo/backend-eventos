import { IRegistrationTypesRepository } from "../../repositories/IRegistrationTypesRepository";
import { RegistrationType } from "../../entities/RegistrationType";


export class ListRegistrationTypeUseCase {
  constructor(
    private registrationTypeRepository:IRegistrationTypesRepository
  ) {}

  async execute(): Promise<RegistrationType[]> {
    return this.registrationTypeRepository.getAllRegistrationTypes();
  }
}