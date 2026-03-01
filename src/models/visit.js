const { Schema, model } = require("mongoose");

const visitSchema = new Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        name: String,
        price: Number,
        duration: Number,
      },
    ],
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: Number, required: true },
    note: { type: String },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
  },
  { versionKey: false }
);

module.exports = model("Visit", visitSchema);
