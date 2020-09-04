import { SQLiteUsersRepository } from "../../repositories/implementations/SQLiteUsersRepository";
import { LoginUseCase } from "./LoginUseCase";
import { LoginController } from "./LoginController";
import { RefreshTokenStore } from "./refreshTokenStore";


const sqliteUsersRepository = new SQLiteUsersRepository()
const refreshTokenStore = new RefreshTokenStore();

const loginUseCase = new LoginUseCase(
    sqliteUsersRepository
)

const loginController = new LoginController(
    loginUseCase,
    refreshTokenStore
)

export {loginController, loginUseCase}