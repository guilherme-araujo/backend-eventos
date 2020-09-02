import { IAbstractRepository } from "../IAbstractRepository";
import db from '../../../database/connection';
import { Abstract } from "../../entities/Abstract";
import {Author} from "../../entities/Author";

export class SQLiteAbstractRepository implements IAbstractRepository {
    async createAbstract(abstract: Abstract):Promise<void>{
        db('user_abstract').insert({
            "title":abstract.title,
            "text":abstract.text,
            "keywords":abstract.keywords,
            "user_id":abstract.user.id
        }).then(function(){})
    }

    async linkAbstractAuthor(abstract: Abstract, author: Author):Promise<void>{
        db('abstract-author').insert({
            "author_id":author.id,
            "abstract_id":abstract.id
        }).then(function(){})
    }
}