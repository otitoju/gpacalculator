const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, minLength: 3 },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", AdminSchema);
