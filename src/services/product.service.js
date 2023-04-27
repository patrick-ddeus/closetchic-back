import { database } from '../database/connect.js';
const collection = database.collection('products')

const findAllProducts = () => collection.find({}).toArray()

export default {
    findAllProducts
}