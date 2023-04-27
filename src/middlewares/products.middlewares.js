import sanitizeObjects from "../helpers/sanitizeObjects.js";
import { InsertProductSchema } from "../schemas/products.schema.js";
import ProductService from "../services/product.service.js";

export const validProduct = async (req, res, next) => {
    const { slug, name, image, category, description, price, rating } = sanitizeObjects(req.body);

    const { error } = InsertProductSchema.validate(
        { slug, name, image, category, description, price, rating },
        { abortEarly: false }
    );

    if (error) {
        const erros = error.details.map((detail) => detail.message);
        return res.status(422).json({ message: "Campo body inválido!", error: erros });
    }

    try {
        const productAlreadyRegistered = await ProductService.findOneProduct({ slug });

        if (productAlreadyRegistered) {
            return res.status(409).json({ message: "Produto já cadastrado!" });
        }

        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};