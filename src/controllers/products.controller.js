import ProductService from '../services/product.service.js';

const findAll = async (req, res) => {
    try {
        const users = await ProductService.findAllProducts();

        if (users.length === 0) {
            return res.status(404).json({ message: "Theres no users products!" });
        }

        res.status(200).json({message:"Ok!", users})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

export default {
    findAll
};