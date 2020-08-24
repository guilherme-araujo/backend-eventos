import { User } from "../../entities/User";

export interface ICreateAbstractRequestDTO{
    title : string;
    text : string;
    keywords : string;
    user : User;
}