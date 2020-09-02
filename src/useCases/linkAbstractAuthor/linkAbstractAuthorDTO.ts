import { Author } from "../../entities/Author";
import { Abstract } from "../../entities/Abstract";

export interface linkAbstractAuthorDTO{
    author: Author,
    abstract: Abstract
}