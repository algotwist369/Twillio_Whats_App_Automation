import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true // INR
        },
        billing_cycle: {
            type: String,
            enum: ["MONTHLY", "YEARLY"],
            required: true
        },
        conversation_limit: {
            type: Number,
            required: true
        },
        features: [String],
        razorpay_plan_id: {
            type: String,
            required: true,
            unique: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Plan", PlanSchema);
