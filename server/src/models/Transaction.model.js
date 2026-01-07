import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },
        type: {
            type: String,
            enum: ["DEBIT", "CREDIT"],
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        reference_id: {
            type: mongoose.Schema.Types.ObjectId
        },
        razorpay_payment_id: String,
        razorpay_invoice_id: String,
        subscription_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subscription"
        }

    },
    { timestamps: true }
);

export default mongoose.model("Transaction", TransactionSchema);
