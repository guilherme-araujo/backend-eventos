import { PaymentSituation } from "../entities/PaymentSituation";

export interface IPaymentSituationsRepository {
    getAllPaymentSituations(): Promise<PaymentSituation[]>
}