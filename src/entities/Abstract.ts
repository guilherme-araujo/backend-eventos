import { User } from "./User";
import {Evaluation} from "./Evaluation";
import { Author } from "./Author";

export class Abstract {
   
    public readonly id: string;
  
    public title: string;
    public text: string;
    public keywords: string;
    public user: User;
    public evaluations: Evaluation[];
    public authors: Author[];
    
  
    constructor(props: Omit<Abstract, 'id'|'authors'|'evaluations'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }