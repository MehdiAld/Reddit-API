import { mongoose, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String, min: [6, "Au moins six caractère minimun"] },
});



userSchema.methods.crypto = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

userSchema.methods.veriPass = async (password, elderPassword) => {
  const result = await bcrypt.compare(password, elderPassword);
  return result;
};
const User = mongoose.model("User", userSchema);

export default User;
