import { ICitiesRepository } from "../../repositories/ICitiesRepository";
import { City } from "../../entities/City";


export class ListCitiesUseCase {
  constructor(
    private citiesRepository: ICitiesRepository
  ) {}

  async execute(id:string): Promise<City[]> {
    return this.citiesRepository.getAllCities(id);
  }
}
