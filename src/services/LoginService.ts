import UserModel from '../models/UserModel';
import IUsers from '../interfaces/users';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async getByUserName(username: string, password:string): Promise<IUsers> {
    const user = await this.model.getByUserName(username, password);
    return user;
  }
}