import { cartSchema } from "../schemas/cart.schema.js";

export function validateCart(req, res, next) {
  const { products } = req.body;
  const validation = cartSchema.validate(products, { abortEarly: false });
  if (validation.error) {
    const errors = validation.error.details.map(err => err.message);
    return res.status(422).json(errors);
  }
  next();
}