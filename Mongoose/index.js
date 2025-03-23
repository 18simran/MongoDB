const mongoose = require("mongoose");

main()
  .then((res) => console.log("connection succcessful"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const Userschema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});
const User = mongoose.model("User", Userschema);
// const user1 = new User({
//   name: "simran",
//   age: 21,
//   email: "simran@gmail.com",
// });
// user1.save();
// const user2 = new User({
//   name: "kishik",
//   age: 21,
//   email: "kishik@gmail.com",
// });
// user2
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//insertMany
// User.insertMany([
//   {
//     name: "Tommu",
//     age: 4,
//     email: "tommu@gmail.com",
//   },
//   {
//     name: "Tuffy",
//     age: 5,
//     email: "tuffy@gmail.com",
//   },
//   {
//     name: "Rimpy",
//     age: 5,
//     email: "rimpy@gmail.com",
//   },
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// User.find({ age: 5 })
//   .then((res) => console.log(res + "result is"))
//   .catch((err) => console.log(err));

// User.findOne({ age: 5 })
//   .then((res) => console.log(res + "yes is"))
//   .catch((err) => console.log(err));
User.find({ name: "kishik" })
  .select("name email")
  .then((res) => console.log(res + "yes is"))
  .catch((err) => console.log(err));
