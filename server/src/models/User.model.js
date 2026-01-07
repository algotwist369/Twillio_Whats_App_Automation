import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true
        },
        password_hash: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["ADMIND", "OWNER"],
            default: "OWNER"
        },
        status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "SUSPENDED"],
            default: "ACTIVE"
        },
        created_at: Date,
        lastLogin_at: Date,
        updated_at: Date
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);
