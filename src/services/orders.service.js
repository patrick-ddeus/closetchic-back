import { database } from "../database/connect.js";

const collection = database.collection("orders");

const createOrderService = (query) => collection.insertOne(query);
const findOrderService = (query) => collection.find(query).toArray();

export default {
    createOrderService,
    findOrderService
};