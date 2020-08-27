import { Payment } from "../entities/Payment";
//nao sei ainda se é preciso criar mais funções em pagamento, talvez por uma questão de segurança
export interface IPaymentsRepository {
  save(payment: Payment): Promise<void>;
}