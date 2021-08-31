const express = require('express');
const router = express.Router();

//requiring controllers
const {
  newProjectController,
  getSingleProjectController,
  updateProjectController,
  deleteProjectController,
  getAllProjectController,
} = require('../controllers/projectController');

//post project router
router.post('/', newProjectController);
//get single project router
router.get('/:id', getSingleProjectController);

//edit projects router
router.put('/:id', updateProjectController);
//delete projects router
router.delete('/:id', deleteProjectController);
//get all projects router
router.get('/', getAllProjectController);
module.exports = router;
