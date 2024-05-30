import mongoose from "mongoose";
const collection = "stage";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    businesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business'
    }]
})

const stageModel = mongoose.model(collection,schema);
export default stageModel;