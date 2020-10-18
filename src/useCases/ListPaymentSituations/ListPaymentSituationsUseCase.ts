import { IPaymentSituationsRepository } from "../../repositories/IPaymentSituationsRepository";
import { PaymentSituation } from "../../entities/PaymentSituation";


export class ListPaymentSituationsUseCase {
  constructor(
    private paymentSituationRepository: IPaymentSituationsRepository
  ) {}

  async execute(): Promise<PaymentSituation[]> {
    return this.paymentSituationRepository.getAllPaymentSituations();
  }
}