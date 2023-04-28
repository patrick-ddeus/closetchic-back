import { database } from '../database/connect.js';
const collection = database.collection('products');

const findAllProducts = (query = {}, limit = 0, skip = 0) => collection.find(query).limit(limit).skip(skip).toArray();
const findOneProduct = (query) => collection.findOne(query);
const addOneProduct = (product) => collection.insertOne(product);

export default {
    findAllProducts,
    findOneProduct,
    addOneProduct
};