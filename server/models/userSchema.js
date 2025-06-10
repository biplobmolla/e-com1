import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["buyer", "seller", "admin"],
            default: 'buyer',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const User = mongoose.model('User', userSchema);

export default User;