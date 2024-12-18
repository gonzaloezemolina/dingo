import budgetModel from "../models/budgets.model.js";

export default class budgetController {

    createBudget = (budget) => {
        return budgetModel.create(budget);
    };

    getBudgets = () => {
        return budgetModel.find().lean()
    };

    getBudgetById = (id) => {
        return budgetModel.findById(id).populate('clientes')
    };

    deleteBudgets = (id) => {
        return budgetModel.deleteOne({_id:id})
    };
}