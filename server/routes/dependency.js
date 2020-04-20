const express = require('express');
const router = express.Router();
const controller = require('../controllers/dependencyController');

// localhost:5000/api/v1/dependency/:package
router.get('/:package', controller.getByPackageName);

module.exports = router;
