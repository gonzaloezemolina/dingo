import expensesModel from "../models/expenses.model.js";

export default class expenseController{
    getExpenses = () => {
        return expensesModel.find().lean();
    }

    getExpenseById = (id) => {
        return expensesModel.findOne({_id:id});
    }

    createExpense = (exp) => {
        return expensesModel.create(exp)
    }
}