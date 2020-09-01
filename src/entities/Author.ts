import { Institution } from "./Instituition";

export class Author {
   
    public readonly id: string;
  
    public name: string;
    public email: string;
    public institution: Institution;
    //public abbreviation: string; 
  
    constructor(props: Omit<Author, 'id'>, id?: string) {
      Object.assign(this, props);
  
      if (!id) {
        //this.id = uuid();
      }
    }
  }