import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const productValidation = Joi.object({
  name: Joi.string().required().min(2).messages({
    'string.min': '"name" length must be at least 3 characters long',
    'string.required': '"name" is required',
    'string.string': '"name" must be a string',
  }),
  amount: Joi.string().required().min(2).messages({
    'string.min': '"amount" length must be at least 3 characters long',
    'string.required': '"amount" is required',
    'string.string': '"amount" must be a string',
  }),
});

export default class ProductValidate {
  public validate = (req: Request, res: Response, next: NextFunction) => {
    const validate = productValidation.validate(req.body);
    
    if (validate.error) {
      const typeError = validate.error.details[0].type;
      const valor = typeError.includes('required') ? 400 : 422;

      return res
        .status(valor)
        .json({ message: validate.error.details[0].message });
    }
    next();
  };
}
