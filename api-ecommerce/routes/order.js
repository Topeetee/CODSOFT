const router = require("express").Router();

const{ getOrder, getIncome, getOrders, createOrder, updateOrder, deleteOrder } = require("../../api-ecommerce/controller/order");
const { verifyAdmin, verifyUser, verifyToken } = require("../utils/verifyToken");
router.get('/', verifyAdmin, getOrders);
router.get('/income', verifyAdmin, getIncome);
router.get('/:userId', verifyUser, getOrder);
router.post('/', verifyToken, createOrder);
router.put('/:id', verifyAdmin, updateOrder); 
router.delete('/:id', verifyAdmin, deleteOrder);
module.exports = router;