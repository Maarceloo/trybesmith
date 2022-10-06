import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import IUsers from '../interfaces/users';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUsers;
    const newUser = await this.service.create(user);

    if (!newUser) res.status(404).json('usuario nao cadastrado controller');

    const senha = process.env.JWT_SECRET || 'senhaSecreta';
    const token = jwt.sign(newUser, senha);
    res.status(201).json({ token });
  };
}