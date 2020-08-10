export class RegistrationType {
   
    public readonly id: string;
  
    public type: string;
    public value: number;
    public active: boolean;
  
    constructor(props: Omit<RegistrationType, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }