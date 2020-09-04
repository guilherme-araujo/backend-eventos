import { SQLiteUsersRepository } from "../../repositories/implementations/SQLiteUsersRepository";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";


const sqliteUsersRepository = new SQLiteUsersRepository()

const loginUseCase = new LoginUseCase(
    sqliteUsersRepository
)

const loginController = new LoginController(
    loginUseCase
)

export {loginController, loginUseCase}