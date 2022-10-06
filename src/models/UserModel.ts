import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/users';
import connection from './connection';

export default class UserModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId: id } = result;
    const newUser = { id, username, classe, level, password };
    return newUser;
  }

  public async getByUserName(username: string, password: string): Promise<IUsers> {
    const result = await this.connection.execute(`
    SELECT * FROM Trybesmith.Users WHERE username=? AND password=?`, [username, password]);
    const [rows] = result;
    const [user] = rows as IUsers[];
    return user;
  }
}