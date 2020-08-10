export class EvaluationStatus {
   
    public readonly id: string;
  
    public status: string;
    public observation: string;
  
    constructor(props: Omit<EvaluationStatus, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }