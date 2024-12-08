import Router from 'express'
import expenseController from '../../controllers/expense.controller.js'

const router = Router();

const expenseService = new expenseController();

router.post('/newExpense/eid', async (req,res) => {
    const {eid} = req.params;
    const {amount,date,description,category} = req.body;
    const newExp = {amount,date,description,category};
    const createExp = await expenseService.createExpense(newExp);
    // Continuar empujando al array de exp
});