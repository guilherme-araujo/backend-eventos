import { LinkAbstractAuthorUseCase } from "./linkAbstractAuthorUseCase";
import { LinkAbstractAuthorController } from "./linkAbstractAuthorController";
import { SQLiteAbstractRepository } from "../../repositories/implementations/SQLiteAbstractRepository";

const sqliteAbstractsRepository = new SQLiteAbstractRepository()

const linkAbstractAuthorUseCase = new LinkAbstractAuthorUseCase(sqliteAbstractsRepository)

const linkAbstractAuthorController = new LinkAbstractAuthorController(
    linkAbstractAuthorUseCase
)

export { linkAbstractAuthorUseCase, linkAbstractAuthorController }