import OrderModel from '../models/OrderModel';
import IOrders from '../interfaces/orders';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}