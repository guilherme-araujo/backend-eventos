import { State } from "./State";

export class City {
   
    public readonly id: string;
  
    public name: string;
    public abbreviation: string;
    public state: State;
  
    constructor(props: Omit<City, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }