import { State } from "../entities/State";

export interface IStatesRepository {
    getAllStates(): Promise<State[]>;
}