import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";
import { ICreatePaymentRequestDTO } from "./CreatePaymentDTO";
import { Payment } from "../../entities/Payment";

export class CreatePaymentUseCase {
  constructor(
    private paymentsRepository: IPaymentsRepository
  ) {}

  async execute(data: ICreatePaymentRequestDTO) {
    //talvez seja interessante mais na frente enviar email aqui e em user.
    const payment = new Payment(data);

    await this.paymentsRepository.save(payment);

  }
}