import { database } from '../database/connect.js';
const collection = database.collection('cart');

const findCart = (query) => collection.findOne(query);
const createCart = (userCart) => collection.insertOne(userCart);
const insertOnCart = (query, products) => collection.updateOne(query, { $set: { products } });
const deleteFromCart = (query) => collection.updateOne(query, { $set: { products: [] } });

export default {
  findCart,
  createCart,
  insertOnCart,
  deleteFromCart
};