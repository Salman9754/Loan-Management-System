import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 80,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
            index: true,
        },

        passwordHash: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["user", "admin", "officer"],
            default: "user",
        },

        isVerified: {
            type: Boolean,
            default: true,
        },
        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('User', UserSchema)

export default User

