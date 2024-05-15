import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username : {
        type: String,
        min: 3, 
        max: 20,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        min: 12,
        max: 50,
        required: true
    },
    password: {
        type: String,
        min: 8,
        required: true,
    },
    img: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
})

const postSchema = mongoose.Schema({
    title: {
        type: String,
        max: 30,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: String,
    userID: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
},
{
    timestamps: true
})
export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)