import { database } from "../database/connect.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const collection = database.collection("users");

const createService = (query) => collection.insertOne(query);
const insertOneService = (query) => collection.insertOne(query);
const findOneService = (query) => collection.findOne(query);
const generateToken = (id) =>  jwt.sign(id , process.env.SECRET_KEY, { expiresIn: 864000 });

export default {
    findOneService,
    insertOneService,
    createService,
    generateToken
};