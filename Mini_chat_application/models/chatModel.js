const mongoose = require("mongoose");

const chatUserSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    default: " ",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Chat = mongoose.model("Chat", chatUserSchema);
module.exports = Chat;
