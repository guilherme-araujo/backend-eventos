export class Institution {
   
    public readonly id: string;
  
    public name: string;
    public abbreviation?: string;
  
    constructor(props: Omit<Institution, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }