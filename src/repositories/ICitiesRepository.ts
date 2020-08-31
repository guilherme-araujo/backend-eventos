import { City } from "../entities/City";

export interface ICitiesRepository {
    getAllCities(id: string): Promise<City[]>
}