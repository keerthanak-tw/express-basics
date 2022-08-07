import categories from '../data/category.js';

export const getCategories = (req, res) => {
    return res.send(categories);
};