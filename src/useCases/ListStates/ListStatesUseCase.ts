import { IStatesRepository } from "../../repositories/IStatesRepository";
import { State } from "../../entities/State";


export class ListStatesUseCase {
  constructor(
    private statesRepository: IStatesRepository
  ) {}

  async execute(): Promise<State[]> {

    return this.statesRepository.getAllStates();

  }
}