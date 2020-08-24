import { City } from "../entities/City";

export interface ICitiesRepository {
    getAllCities(): Promise<City[]>
}