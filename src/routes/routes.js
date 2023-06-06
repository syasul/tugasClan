const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.get('/', itemsController.index);
router.post('/items', itemsController.create);
router.get('/items/:id', itemsController.show);
router.post('/items/:id', itemsController.update);
router.post('/items/:id/delete', itemsController.delete);

module.exports = router;
