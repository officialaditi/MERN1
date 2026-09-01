// modeling of data means what are the data we will take, store and organized.
// and this is how we gonna store data using schema

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
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
    timestamps: true
}
)

const User = mongoose.model('User', userSchema);
export default User;