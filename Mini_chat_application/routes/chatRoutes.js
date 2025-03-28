const express = require("express");
const route = express.Router();
const {
  getChats,
  postChat,
  getForm,
  getEditForm,
  updateMessage,
  deleteChat,
} = require("../controllers/chatController");
route.get("/chats", getChats);
route.post("/chats", postChat);
route.get("/chats/form", getForm);
route.get("/chats/:id/edit", getEditForm);
route.put("/chats/:id", updateMessage);
route.delete("/chats/:id", deleteChat);
module.exports = route;
