import taskModel from "../models/task.model.js";

export default class taskController {

    getTasks = () => {
        return taskModel.find().lean();
    }

    createTask = (task) => {
        return taskModel.create(task)
    }
}