import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
    {
        whatsapp_number_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WhatsAppNumber",
            required: true,
            index: true
        },
        customer_phone: {
            type: String,
            required: true,
            index: true
        },
        current_step: {
            type: String,
            required: true
        },
        data: {
            service: String,
            duration: Number,
            date: Date,
            time: String
        },
        last_message_id: String,
        expires_at: {
            type: Date,
            index: true
        },
        is_completed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

ConversationSchema.index({ whatsapp_number_id: 1, customer_phone: 1 });

export default mongoose.model("Conversation", ConversationSchema);
