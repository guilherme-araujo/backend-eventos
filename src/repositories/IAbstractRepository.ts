import { Abstract } from "../entities/Abstract";
import {Author} from "../entities/Author";

export interface IAbstractRepository {
    createAbstract(abstract:Abstract):Promise<void>;
    linkAbstractAuthor(abstract: Abstract, author: Author):Promise<void>;
}