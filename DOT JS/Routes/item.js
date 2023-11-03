const express = require('express');
const {
    getItems,
    getItemById,
    saveItem,
    updateItem,
    deleteItem,
} = require('../controllesrs/itemcontroller.js');
const router = express.router();

router.get('/api/items',getitems);
router.get('/api/items/id',getitembyid);
router.post('/api/items',saveitem);
router.put('/api/items/id',updateitem);
router.delete('/api/items/id',deleteitem);

module.exports = router;