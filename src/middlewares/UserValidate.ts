import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const UserValidation = Joi.object({
  username: Joi.string().required().min(3).messages({
    'string.min': '"username" length must be at least 3 characters long',
    'string.required': '"username" is required',
    'string.string': '"username" must be a string',
  }),
  classe: Joi.string().required().min(3).messages({
    'string.min': '"classe" length must be at least 3 characters long',
    'string.required': '"classe" is required',
    'string.string': '"classe" must be a string',
  }),
  level: Joi.number().required().min(1).messages({
    'string.min': '"level" must be greater than or equal to 1 ',
    'string.required': '"level" is required',
    'string.number': '"level" must be a number',
  }),
  password: Joi.string().required().min(8).messages({
    'string.min': '"password" length must be at least 8 characters long',
    'string.required': '"password" is required',
    'string.string': '"password" must be a string',
  }),
});

export default class UserValidate {
  public validate = (req: Request, res: Response, next: NextFunction) => {
    const validate = UserValidation.validate(req.body);
    
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
