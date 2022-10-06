import { Request, Response } from 'express';
import IProduct from '../interfaces/product';
import ProductService from '../services/ProductService';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body as IProduct;
    const newProduct = await this.service.create(product);
    return res.status(201).json(newProduct);
  };
}