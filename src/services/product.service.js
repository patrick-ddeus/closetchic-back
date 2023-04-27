import { database } from '../database/connect.js';
const collection = database.collection('products');

const findAllProducts = () => collection.find({}).toArray();
const findOneProduct = (query) => collection.findOne(query);

export default {
    findAllProducts,
    findOneProduct
};