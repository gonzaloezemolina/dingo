import mongoose from "mongoose";
const collection = "business";

const schema = new mongoose.Schema({
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contacts',
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
});

const businessModel = mongoose.model(collection, schema);
export default businessModel