import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin : {
        type: Boolean,
        required: true,
        default: false,
    },
},

        {Timestamps: true}

);

const User = mongoose.model("User", userSchema);
export default User;
