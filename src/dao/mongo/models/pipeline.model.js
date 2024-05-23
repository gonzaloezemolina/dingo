import mongoose from "mongoose";
const collection = "pipeline";

const schema = new mongoose.Schema({
    stage: String,
    bussiness: [{
             nombre: String,
            value: Number,
            deadline: Date
        }
    ]
})

const pipelineModel = mongoose.model(collection,schema);
export default pipelineModel;