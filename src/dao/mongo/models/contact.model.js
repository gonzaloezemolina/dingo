import mongoose from "mongoose";
const collection = "contact";
const schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    status: String,
    channel: String,
    lastTouch: Date,
    creation: { type: Date, default: Date.now }
})

const contactModel = mongoose.model(collection,schema);
export default contactModel;