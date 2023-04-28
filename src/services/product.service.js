import { database } from '../database/connect.js';
const collection = database.collection('products');

const findAllProducts = (query = {}) => collection.find(query).toArray();
const findOneProduct = (query) => collection.findOne(query);
const addOneProduct = (product) => collection.insertOne(product);

export default {
    findAllProducts,
    findOneProduct,
    addOneProduct
};