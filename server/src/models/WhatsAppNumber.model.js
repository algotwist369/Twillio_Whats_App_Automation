import mongoose from "mongoose";

const WhatsAppNumberSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },
        phone_number: {
            type: String,
            required: true,
            unique: true
        },
        provider: {
            type: String,
            enum: ["TWILIO"],
            default: "TWILIO"
        },
        twilio_account_sid: {
            type: String,
            required: true
        },
        twilio_auth_token: {
            type: String,
            required: true,
            select: false
        },
        status: {
            type: String,
            enum: ["PENDING", "ACTIVE", "SUSPENDED"],
            default: "PENDING"
        },
        webhook_url: String
    },
    { timestamps: true }
);

export default mongoose.model("WhatsAppNumber", WhatsAppNumberSchema);
