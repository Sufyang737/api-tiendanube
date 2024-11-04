import jsonServer from "json-server";
import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { TiendanubeAuthInterface } from "@features/auth";
import { HttpErrorException } from "@utils";
import CredentialModel, {
  ICredentials,
} from "@features/auth/credentials.model";

/**
 * this repository is temporary, please use real database to production mode
 */

const userRepository = jsonServer.router(path.resolve("db.json"));

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(userRepository);

class UserRepository {
  save(credential: TiendanubeAuthInterface) {
    this.createOrUpdate(credential);
  }

  async findOne(user_id: number) {
    const credential = await CredentialModel.findOne({
      user_id: Number(user_id),
    });

    if (!credential) {
      // throw new HttpErrorException(`${user_id} not found`).setStatusCode(404);
      return { access_token: undefined, user_id };
    }

    return credential;
  }

  async findFirst() {
    return await this.findFirstFilterFun();
  }

  private async createOrUpdate(data: TiendanubeAuthInterface) {
    const { user_id } = data;

    const updatedCredential = await CredentialModel.findOneAndUpdate(
      { user_id },
      data,
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return updatedCredential;
  }

  private async findFirstFilterFun() {
    const credentials = await CredentialModel.find({});
    console.log(credentials);

    return credentials[0];
  }
}

export default new UserRepository();
