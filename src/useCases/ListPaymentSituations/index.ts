import { SQLitePaymentSituationsRepository } from "../../repositories/implementations/SQLitePaymentSituationsRepository";
import { ListPaymentSituationsUseCase } from "./ListPaymentSituationsUseCase";
import { ListPaymentSituationsController } from "./ListPaymentSituationsController";

const sqlitePaymentSituationsRepository = new SQLitePaymentSituationsRepository()


const listPaymentSituationsUseCase = new ListPaymentSituationsUseCase(
    sqlitePaymentSituationsRepository,
)

const listPaymentSituationsController = new ListPaymentSituationsController(
    listPaymentSituationsUseCase,
)

export { listPaymentSituationsUseCase, listPaymentSituationsController }