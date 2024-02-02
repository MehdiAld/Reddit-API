import { mongoose, Schema } from "mongoose";

const postsSchema = new Schema({
  texte: String,
  Img: String,
});

const SubRedditSchema = new Schema({
  title: String,
  posts: [postsSchema],
});

const SubReddit = mongoose.model("SubReddit", SubRedditSchema);

export default SubReddit;
