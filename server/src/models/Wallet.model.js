import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            unique: true
        },
        balance: {
            type: Number,
            default: 0,
            min: 0
        },
        conversations_used: {
            type: Number,
            default: 0
        },
        last_deducted_at: Date,

        monthly_limit: {
            type: Number,
            required: true
        },
        used_this_cycle: {
            type: Number,
            default: 0
        },
        cycle_reset_at: {
            type: Date,
            required: true
        }

    },
    { timestamps: true }
);

export default mongoose.model("Wallet", WalletSchema);
