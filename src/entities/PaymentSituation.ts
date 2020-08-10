export class PaymentSituation {
   
    public readonly id: string;
  
    public name: string;
    public desciption: string;
    code: number;
  
    constructor(props: Omit<PaymentSituation, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }