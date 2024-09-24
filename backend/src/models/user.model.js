import mongoose from "mongoose";

const collection = 'users';

const schema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role:{
        type:String,
        enum: ["Freelancer", "Emprendedor", "Content creator"],
        default: "Emprendedor",
    },
});

const userModel = mongoose.model(collection,schema);
export default userModel;