import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import LoginService from '../services/LoginService';

export default class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public getByUserName = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await this.service.getByUserName(username, password);

    if (!user) return res.status(401).json({ message: 'Username or password invalid' });

    const { id } = user;
    const payload = { id, username };

    const token = Jwt.sign(payload, 'senhasecreta');
    return res.status(200).json({ token });
  };
}