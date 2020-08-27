import { SQLitePaymentsRepository } from "../../repositories/implementations/SQLitePaymentsRepository";
import { CreatePaymentUseCase } from "./CreatePaymentUseCase";
import { CreatePaymentController } from "./CreatePaymentController";

const sqlitePaymentsRepository = new SQLitePaymentsRepository()


const createPaymentUseCase = new CreatePaymentUseCase(
  sqlitePaymentsRepository,
)

const createPaymentController = new CreatePaymentController(
  createPaymentUseCase
)

export { createPaymentUseCase, createPaymentController }