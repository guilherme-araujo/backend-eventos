//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SQLiteUsersRepository } from "../../repositories/implementations/SQLiteUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const sqliteUsersRepository = new SQLiteUsersRepository()
//const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  sqliteUsersRepository,
  //mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }