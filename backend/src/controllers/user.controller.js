import userModel from '../models/user.model.js';

export default class userController {

    getAll = () => {
        return userModel.find().lean();
    };

    getById = (params) => {
        return userModel.findOne(params);
    };

    create = (user) => {
        return userModel.create(user);
    }
}