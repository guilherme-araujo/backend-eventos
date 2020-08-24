import { Abstract } from "../entities/Abstract";

export interface IAbstractRepository {
    createAbstract(abstract:Abstract):Promise<void>;
}