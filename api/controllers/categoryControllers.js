const Category = require('../models/category');

//post category
const newCategoryController = async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//get all category
const getAllCategoryController = async (req, res) => {
  try {
    const allCat = await Category.find();
    res.status(200).json(allCat);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { newCategoryController, getAllCategoryController };
