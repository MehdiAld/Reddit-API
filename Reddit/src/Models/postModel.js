import { mongoose, Schema } from "mongoose";

const postSchema = new Schema({
  text: String,
  img: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;