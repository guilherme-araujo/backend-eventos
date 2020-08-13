import { Abstract } from "./Abstract";
import { EvaluationStatus } from "./EvaluationStatus";

export class Evaluation {
   
    public readonly id: string;
  
    public abstract: Abstract;
    public status: EvaluationStatus;
  
    constructor(props: Omit<Evaluation, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }