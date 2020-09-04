import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserDTO } from "./LoginDTO";
import bcrypt from "bcryptjs";

export class LoginUseCase {
    constructor(
      private usersRepository: IUsersRepository,
      //private mailProvider: IMailProvider,
    ) {}

    async execute(data: ILoginUserDTO) {
        const user = await this.usersRepository.findByEmail(data.email);

        if(!user){
            throw new Error('User not found');
        }

        const passMatch = await bcrypt.compare(data.password,user.password);
        if(!passMatch){
            throw new Error('Wrong password');
        }

        user.password = ''

        return user;

    }

}