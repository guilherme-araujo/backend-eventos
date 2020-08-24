import { Country } from "../entities/Country";

export interface ICountriesRepository {
    getAllCountries(): Promise<Country[]>
}