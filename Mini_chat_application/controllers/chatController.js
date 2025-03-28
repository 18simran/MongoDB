const mongoose = require("mongoose");
const Chat = require("../models/chatModel");
const getChats = async (req, res) => {
  const data = await Chat.find();
  res.render("allMessages.ejs", { data });
};
const postChat = async (req, res) => {
  let { from, to, message } = req.body;

  const newChat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  newChat
    .save()
    .then((res) => console.log("chat was saved"))
    .catch((err) => console.log(err));
  res.redirect("/chats");
};
const getForm = async (req, res) => {
  res.render("form.ejs");
};
const getEditForm = async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
};
const updateMessage = async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
};
const deleteChat = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
};
module.exports = {
  getChats,
  postChat,
  getForm,
  getEditForm,
  updateMessage,
  deleteChat,
};
