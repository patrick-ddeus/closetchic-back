import jwt from "jsonwebtoken";
import "dotenv/config";
import UserService from "../services/users.service.js";
import { ObjectId } from "mongodb";

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(400).json({ message: 'Error, falta o campo authorization nos headers!' });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({ message: "Formato inválido de token" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
        return res.status(401).json({ message: 'Formato inválido de token!' });
    }

    jwt.verify(token, process.env.SECRET_KEY, async (error, decode) => {
        if (error) {
            return res.status(401).json({ message: "Token inválido!" });
        }
        try {
            const ObjectID = new ObjectId(decode.userId);
            const user = await UserService.findOneService({ _id: ObjectID });

            req.id = user._id;
            
            return next();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

export default authMiddleware;