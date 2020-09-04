import { IPaymentsRepository } from "../IPaymentsRepository";
import { Payment } from "../../entities/Payment";
import db from '../../../database/connection';

export class SQLitePaymentsRepository implements IPaymentsRepository {
  async save(payment: Payment): Promise<void> {
    db('user_payment').insert({
      "user_id": payment.user.id,
      "payment_situation_id": payment.status.id,
      "transaction_code": payment.transaction_code,
      "observation" : payment.obs
    }).then(function(){});
  }
}