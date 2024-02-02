import Post from "../Models/postModel";

const showALLPost = async (req, res) => {
  try {
    const ShowPost = await Post.find();
    res.json(ShowPost);
  } catch (error) {
    res.send(error);
  }
};

const createPost = async (req, res) => {
  const { text, img } = req.body;

  try {
    const post = new Post({ text, img });
    await post.save();
    res.json({ post: "Tu à créer un post✔" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const editPost = async (req, res) => {
  try {
    const updatePost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ updatePost, message: "votre post à été modifier" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const removePost = async (req, res) => {
  try {
    const removePost = await Post.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Tu à bien supprimer le post" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export { showALLPost, createPost, editPost, removePost };
