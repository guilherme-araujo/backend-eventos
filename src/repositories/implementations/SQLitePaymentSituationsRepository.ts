import { IPaymentSituationsRepository } from "../IPaymentSituationsRepository";
import db from '../../../database/connection';
import { PaymentSituation } from "../../entities/PaymentSituation";

export class SQLitePaymentSituationsRepository implements IPaymentSituationsRepository {
  
  async getAllPaymentSituations(): Promise<PaymentSituation[]>{  
    return db
      .select()
      .from<PaymentSituation>("user_payment_situation")
      .then(rows => rows);
  }

}