import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            trim: true
        },

        duration_minutes: {
            type: Number,
            required: true // e.g. 60, 90
        },

        price: {
            type: Number,
            required: true
        },

        category: {
            type: String,
            enum: ["MASSAGE", "FACIAL", "THERAPY", "COUPLE", "ADDON"],
            index: true
        },

        is_active: {
            type: Boolean,
            default: true
        },

        is_whatsApp_enabled: {
            type: Boolean,
            default: true // visible in CTA flow
        }
    },
    { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);
