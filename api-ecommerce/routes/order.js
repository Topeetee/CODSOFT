const router = require("express").Router();

const{ getOrder, getIncome, getOrders, createOrder, updateOrder, deleteOrder } = require("../../api-ecommerce/controller/order");
const { verifyAdmin, verifyUser, verifyToken } = require("../utils/verifyToken");
router.get('/', getOrders);
router.get('/income', getIncome);
router.get('/:userId', getOrder);
router.post('/', verifyToken, createOrder);
router.put('/:id', updateOrder); 
router.delete('/:id', deleteOrder);
module.exports = router;