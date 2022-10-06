import UserModel from '../models/UserModel';
import IUsers from '../interfaces/users';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: IUsers) {
    const newUser = await this.model.create(user);
    return newUser;
  }
}