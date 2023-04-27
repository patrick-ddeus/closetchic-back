import { database } from '../database/connect.js';
const collection = database.collection('cart');

const findCart = (query) => collection.findOne(query);
const createCart = (userCart) => collection.insertOne(userCart);
const insertOnCart = (query, product) => collection.updateOne(query, { $push: { products: product } });

export default {
  findCart,
  createCart,
  insertOnCart
};