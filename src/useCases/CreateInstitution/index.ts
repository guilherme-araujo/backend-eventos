import { SQLiteInstitutionsRepository } from "../../repositories/implementations/SQLiteInstitutionsRepository";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";
import { CreateInstitutionController } from "./CreateInstitutionController";

const sqliteInstitutionsRepository = new SQLiteInstitutionsRepository()


const createInstitutionUseCase = new CreateInstitutionUseCase(
  sqliteInstitutionsRepository,
)

const createInstitutionController = new CreateInstitutionController(
  createInstitutionUseCase,
)

export { createInstitutionUseCase, createInstitutionController }