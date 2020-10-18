import { ICountriesRepository } from "../../repositories/ICountriesRepository";
import { Country } from "../../entities/Country";


export class ListCountriesUseCase {
  constructor(
    private countryRepository: ICountriesRepository
  ) {}

  async execute(): Promise<Country[]> {
    return this.countryRepository.getAllCountries();
  }
}