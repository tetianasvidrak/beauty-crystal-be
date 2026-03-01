const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    active: { type: Boolean, default: true },
  },
  { versionKey: false }
);

module.exports = model("Employee", employeeSchema);
