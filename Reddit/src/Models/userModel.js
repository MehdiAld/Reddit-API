import { mongoose, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String, min: [6, "Au moins six caractère minimun"] },
});

const User = mongoose.model("User", userSchema);

export default User;
