import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/product';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: IProduct) {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}