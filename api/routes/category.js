const express = require('express');
const router = express.Router();

const {
  newCategoryController,
  getAllCategoryController,
} = require('../controllers/categoryControllers');

//post category
router.post('/', newCategoryController);
//get all category
router.get('/', getAllCategoryController);
module.exports = router;
