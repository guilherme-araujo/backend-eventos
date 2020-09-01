import { ICreateAbstractRequestDTO } from "./CreateAbstractDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAbstractRepository } from "../../repositories/IAbstractRepository";
import { Abstract } from "../../entities/Abstract";

export class CreateAbstractUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private abstractRepository: IAbstractRepository,
    ) {}

    async execute(data: ICreateAbstractRequestDTO) {
        /* TODO: descomentar isso quando a função findByEmail estiver operacional
        const userExists = await this.usersRepository.findByEmail(data.user.email);
        //se o usuário não existir, retorne um erro
        if (userExists == undefined) {
            throw new Error('User does not exists.');
        }
        */
        const abstract = new Abstract(data);

        await this.abstractRepository.createAbstract(abstract);
    }

}