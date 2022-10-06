import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product';
import connection from './connection';

export default class ProductModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as IProduct[];
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const { insertId: id } = result;
    const newProduct = { id, name, amount };
    return newProduct;
  }
}