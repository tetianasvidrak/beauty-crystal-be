const { Schema, model } = require("mongoose");

const serviceSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  { versionKey: false }
);

module.exports = model("Service", serviceSchema);
