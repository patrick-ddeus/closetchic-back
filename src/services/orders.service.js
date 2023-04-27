import { database } from "../database/connect.js";

const collection = database.collection("orders");

const createOrderService = (query) => collection.insertOne(query);

export default {
    createOrderService
};