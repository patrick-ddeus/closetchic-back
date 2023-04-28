import cartService from "../services/cart.service.js";

async function postCart(req, res) {
  const userId = req.id;
  const { products } = req.body;

  try {
    const userCart = await cartService.findCart({ userId });
    if (!userCart) await cartService.createCart({ userId, products });
    if (userCart) await cartService.insertOnCart({ userId }, products);
    res.status(201).json({ message: "Produto adicionado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getCart(req, res) {
  const userId = req.id;

  try {
    const userCart = await cartService.findCart({ userId });
    if (!userCart) return res.status(200).json({ message: "Ok!", userCart: [] });
    res.status(200).json({ message: "Ok!", userCart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteCart(req, res) {
  const userId = req.id;
  try {
    await cartService.deleteFromCart({ userId });
    res.status(200).json({ message: "Carrinho limpo com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export default {
  postCart,
  getCart,
  deleteCart
};