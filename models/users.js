import mongoose, {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: {unique: true},
    },
    password:{
        type: String,
        required: true, 
    }
})

export const User = model('user', userSchema)