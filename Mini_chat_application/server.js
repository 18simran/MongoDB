const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const chatRoutes = require("./routes/chatRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

main()
  .then((resolved) => console.log("connected mongodb"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/chats");
}
app.use("/", chatRoutes);
app.listen(3000, () => {
  console.log("Listening");
});
