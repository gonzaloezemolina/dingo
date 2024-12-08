import mongoose from 'mongoose';

const collection = 'tasks';

const schema = new mongoose.Schema({
    title:String,
    description:String,
    status: String,
    dueDate: Date,
    priority: String
});

const taskModel = mongoose.model(collection,schema);
export default taskModel;