import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },
        plan_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plan",
            required: true
        },
        razorpay_subscription_id: {
            type: String,
            required: true,
            unique: true
        },
        razorpay_customer_id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: [
                "CREATED",
                "ACTIVE",
                "PAUSED",
                "CANCELLED",
                "EXPIRED"
            ],
            default: "CREATED"
        },
        current_period_start: Date,
        current_period_end: Date,
        auto_renew: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Subscription", SubscriptionSchema);
