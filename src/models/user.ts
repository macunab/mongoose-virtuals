import { Document, model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = model<IUser & Document>('User', userSchema);

export default userModel;