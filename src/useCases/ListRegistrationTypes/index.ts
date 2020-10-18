import { SQLiteRegistrationTypesRepository } from "../../repositories/implementations/SQLiteRegistrationTypesRepository";
import { ListRegistrationTypeUseCase } from "./ListRegistrationTypesUseCase";
import { ListRegistrationTypeController } from "./ListRegistrationTypesController";

const sqliteRegistrationTypeRepository = new SQLiteRegistrationTypesRepository()


const listRegistrationTypesUseCase = new ListRegistrationTypeUseCase(
    sqliteRegistrationTypeRepository,
)

const listRegistrationTypesController = new ListRegistrationTypeController(
    listRegistrationTypesUseCase,
)

export { listRegistrationTypesUseCase, listRegistrationTypesController }