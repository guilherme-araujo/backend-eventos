import { IPaymentsRepository } from "../IPaymentsRepository";
import { Payment } from "../../entities/Payment";
import db from '../../../database/connection';

export class SQLitePaymentsRepository implements IPaymentsRepository {
  async save(payment: Payment): Promise<void> {
    db('user_payment').insert({
      "user": payment.user.id,
      "status": payment.status.description,
      "transaction_code": payment.transaction_code,
      "obs" : payment.obs
    }).then(function(){});
  }
}