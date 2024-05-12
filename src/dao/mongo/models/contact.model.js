import mongoose from "mongoose";
const collection = "contact";
const schema = new mongoose.Schema({
    name: String,
    phone: Number,
    status: String,
    caught: String,
    lastTouch: Date,
    creation: new Date().toLocaleDateString
})

const contactModel = mongoose.model(collection,schema);
export default contactModel;