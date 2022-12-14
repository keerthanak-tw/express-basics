import products from '../data/products.js';
import categories from '../data/category.js';

export const getByCategoryId = (req, res) => {
    try {
        const { categoryId } = req.params;
        if (!categories.some((category) => category.id === categoryId)) {
            return res.status(404).send({ message: 'Category not found' });
        }
        const productsOfCategory = products.filter((product) => product.categoryId === categoryId);
        return res.send(productsOfCategory);
    } catch (error) {
        return res.status(500).send({ message: 'Internal Server Error' });
    }
};
