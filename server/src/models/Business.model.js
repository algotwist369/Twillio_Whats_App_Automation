import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            default: "SPA"
        },
        address: String,
        city: String,
        state: String,
        country: {
            type: String,
            default: "India"
        },
        phone: {
            type: String,
            required: true
        },
        timezone: {
            type: String,
            default: "Asia/Kolkata"
        },
        subscription_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription"
        },
        plan_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plan"
        },
        subscription_status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "INACTIVE"
        },
        is_active: {
            type: Boolean,
            default: true
        },
        created_at: Date,
        updated_at: Date
    },
    { timestamps: true }
);

export default mongoose.model("Business", BusinessSchema);
