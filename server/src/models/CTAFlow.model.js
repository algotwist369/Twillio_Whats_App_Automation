import mongoose from "mongoose";

const ButtonSchema = new mongoose.Schema(
    {
        button_id: String,
        label: { type: String, required: true },
        action_type: {
            type: String,
            enum: ["NEXT_STEP", "CALL", "URL", "CONFIRM"],
            required: true
        },
        value: String,
        save_as: String
    },
    { _id: false }
);

const StepSchema = new mongoose.Schema(
    {
        step_id: { type: String, required: true },
        message: { type: String, required: true },
        buttons: {
            type: [ButtonSchema],
            validate: v => v.length > 0
        }
    },
    { _id: false }
);

const CTAFlowSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },
        whatsapp_number_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "WhatsAppNumber",
            required: true
        },
        welcome_message: {
            type: String,
            required: true
        },
        steps: {
            type: [StepSchema],
            required: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("CTAFlow", CTAFlowSchema);
