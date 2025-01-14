import mongoose, { Schema } from "mongoose";

const likesSchema = new Schema({
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "tweet"
    }
}, {
    timestamps: true
})

export const Like = mongoose.model("Like", likesSchema)