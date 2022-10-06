import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/orders';
import connection from './connection';

export default class OrderModel {
  public connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId;
    `);
    return result as IOrders[];
  }
}