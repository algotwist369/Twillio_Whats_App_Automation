import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true
    },
    whatsapp_number_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WhatsAppNumber",
      required: true
    },
    customer_phone: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["CONFIRMED", "CANCELLED"],
      default: "CONFIRMED"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
