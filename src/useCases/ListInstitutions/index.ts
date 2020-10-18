import { SQLiteInstitutionsRepository } from "../../repositories/implementations/SQLiteInstitutionsRepository";
import { ListInstitutionsUseCase } from "./ListInstitutionsUseCase";
import { ListInstitutionsController } from "./ListInstitutionsController";

const sqliteInstitutionsRepository = new SQLiteInstitutionsRepository()


const listInstitutionsUseCase = new ListInstitutionsUseCase(
    sqliteInstitutionsRepository,
)

const listInstitutionsController = new ListInstitutionsController(
    listInstitutionsUseCase,
)

export { listInstitutionsUseCase, listInstitutionsController }