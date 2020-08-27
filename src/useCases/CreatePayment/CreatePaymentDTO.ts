import { User } from "../../entities/User";
import { PaymentSituation } from "../../entities/PaymentSituation";

export interface ICreatePaymentRequestDTO {
  user: User;
  status: PaymentSituation;
  transaction_code: string;
  obs: string;
}
