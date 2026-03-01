const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    unique: [true, "User with phone number exists"],
  },
});

module.exports = model("Client", clientSchema);
