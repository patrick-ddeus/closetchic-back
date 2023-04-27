import cartService from "../services/cart.service.js";

async function postCart(req, res) {
  const userId = req.headers.id;
  const product = req.body;

  try {
    const userCart = await cartService.findCart({ userId });
    if (!userCart) await cartService.createCart({ userId, products: [product] });
    if (userCart) await cartService.insertOnCart({ userId }, product);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}


export default {
  postCart,

};