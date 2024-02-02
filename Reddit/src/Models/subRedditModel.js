import { mongoose, Schema } from "mongoose";

const postsSchema = new Schema({
  text: String,
  img: String,
});

const SubRedditSchema = new Schema({
  title: String,
  posts: [postsSchema],
});

const SubReddit = mongoose.model("SubReddit", SubRedditSchema);

export default SubReddit;
