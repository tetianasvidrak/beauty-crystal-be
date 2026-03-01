const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    displayColor: { type: String, default: "#FFFFFF" },
  },
  { versionKey: false }
);

module.exports = model("Category", categorySchema);
