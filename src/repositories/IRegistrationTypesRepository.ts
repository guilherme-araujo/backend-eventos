import { RegistrationType } from "../entities/RegistrationType";

export interface IRegistrationTypesRepository {
    getAllRegistrationTypes(): Promise<RegistrationType[]>
}