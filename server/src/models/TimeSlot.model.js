import mongoose from "mongoose";

const TimeSlotSchema = new mongoose.Schema(
    {
        business_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true,
            index: true
        },

        service_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },

        date: {
            type: Date,
            required: true,
            index: true
        },

        start_time: {
            type: String, // "18:00"
            required: true
        },

        end_time: {
            type: String, // "19:00"
            required: true
        },

        capacity: {
            type: Number,
            default: 1 // for multiple therapists
        },

        booked_count: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: ["AVAILABLE", "FULL", "BLOCKED"],
            default: "AVAILABLE",
            index: true
        }
    },
    { timestamps: true }
);

TimeSlotSchema.index(
    { business_id: 1, service_id: 1, date: 1, start_time: 1 },
    { unique: true }
);

export default mongoose.model("TimeSlot", TimeSlotSchema);
