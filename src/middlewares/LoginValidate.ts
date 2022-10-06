import { Request, Response, NextFunction } from 'express';

export default class LoginValidate {
  public validate = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (!username) return res.status(400).json({ message: '"username" is required' });
    if (!password) return res.status(400).json({ message: '"password" is required' });
    next();
  };
}