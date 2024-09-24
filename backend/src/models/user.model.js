import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role:{
        type:String,
        enum: ["admin", "user"],
        default: "user",
    },
});

const userModel = mongoose.model(collection,schema);
export default userModel;