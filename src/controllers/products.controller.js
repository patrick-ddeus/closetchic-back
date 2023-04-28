import ProductService from '../services/product.service.js';

const findAll = async (req, res) => {
    const searchQuery = req.query.q;

    try {
        let products = [];

        if (searchQuery) {
            const cleanSearchQuery = searchQuery.replace("%", " ");
            products = await ProductService.findAllProducts({ name: { $regex: cleanSearchQuery, $options: 'i' } });
        } else {
            products = await ProductService.findAllProducts();
        }

        if (products.length === 0) {
            return res.status(404).json({ message: "Theres no products products!" });
        }

        res.status(200).json({ message: "Ok!", products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const findOne = async (req, res) => {
    const { slug } = req.params;
    try {
        const product = await ProductService.findOneProduct({ slug });

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado" });
        };

        res.status(200).json({ message: "Ok!", product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const insertOne = async (req, res) => {
    const product = req.body;
    try {
        await ProductService.addOneProduct(product);

        res.status(201).json({ message: "Ok!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    findAll,
    findOne,
    insertOne
};