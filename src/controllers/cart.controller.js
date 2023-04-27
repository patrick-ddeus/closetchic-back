import cartService from "../services/cart.service.js";

async function postCart(req, res) {
  const userId = req.id;
  const product = req.body;

  try {
    const userCart = await cartService.findCart({ userId });
    if (!userCart) await cartService.createCart({ userId, products: [product] });
    if (userCart) await cartService.insertOnCart({ userId }, product);
    res.status(201).json({ message: "Produto adicionado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getCart(req, res) {
  const userId = req.id;
  try {
    const userCart = await cartService.findCart({ userId });
    res.status(200).json({ message: "Ok!", userCart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export default {
  postCart,
  getCart
};