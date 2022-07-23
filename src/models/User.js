import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
});

const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});
// save 하기전에 pre로 비밀번호를 비크립트를 이용하여 해쉬화 시킴

export default User;
