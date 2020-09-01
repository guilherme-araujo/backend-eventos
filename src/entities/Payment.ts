import { User } from "./User";
import { PaymentSituation } from "./PaymentSituation";

export class Payment {
   
    public readonly id: string;
  
    public user: User;
    public status: PaymentSituation;
    public transaction_code: string;
    public obs?: string; //observação não obrigatória(no banco tb está como não obrigatória)
  
    constructor(props: Omit<Payment, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }