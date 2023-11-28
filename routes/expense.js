const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();


router.get('/',expenseController.getExpense);
router.post('/add-expense',expenseController.postExpense);
router.delete('/:id',expenseController.postDelete);
router.put('/:id',expenseController.postEdit);




module.exports = router;