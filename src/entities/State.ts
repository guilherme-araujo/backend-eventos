export class State {
   
    public readonly id: string;
  
    public name: string;
    public abbreviation: string;
  
    constructor(props: Omit<State, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }