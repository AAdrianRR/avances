const express = require('express');
const router = express.Router();
const { createClase } = require('../controllers/claseController');
const authAdmin = require('../middlewares/authAdmin');

router.post('/', authAdmin, createClase);

module.exports = router;
