import { User } from "./User";

export class Abstract {
   
    public readonly id: string;
  
    public title: string;
    public text: string;
    public keywords: string;
    public user: User;
    
  
    constructor(props: Omit<Abstract, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }