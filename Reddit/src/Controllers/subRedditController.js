import SubReddit from "../Models/subRedditModel";
import Post from "../Models/postModel";

const ShowAllSubReddit = async (req, res) => {
  try {
    const allSubreddits = await SubReddit.find();
    res.json(allSubreddits);
  } catch (error) {
    res.send(err);
  }
};

const createSubReddit = async (req, res) => {
  const { title, posts } = req.body;
  try {
    const newSubreddit = new SubReddit({
      title,
      posts,
    });

    const savedSubreddit = await newSubreddit.save();
    console.log("Subreddit créé bravo !!!", savedSubreddit);
    res.json(savedSubreddit);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const DeleteSubReddit = async (req, res) => {
  const subredditId = req.params.subredditId;
  try {
    const deleteSubreddit = await SubReddit.findByIdAndDelete(subredditId);

    if (deleteSubreddit) {
      res.json({
        message: "Subreddit à été supprimer",
        SubReddit: deleteSubreddit,
      });
    } else {
      res.json({ message: "le subreddit est un introuvable" });
    }
  } catch (error) {
    res.sond({ error: error.message });
  }
};

const addPostInSubReddit = async (req, res) => {
  const { subredditId, postId } = req.params;

  try {
    const subreddit = await SubReddit.findById(subredditId);
    const post = await Post.findById(postId);

    if (!subreddit) {
      console.log("Subreddit introuvable");
      res.json({ message: "Subreddit introuvable" });
      return;
    }

    if (!post) {
      console.log("Post introuvable");
      res.json({ message: "Post introuvable" });
      return;
    }

    const existingPost = subreddit.posts.find(
      (p) => p._id.toString() === postId
    );

    if (!existingPost) {
      const postDetail = {
        text: post.text,
        img: post.img,
      };

      subreddit.posts.push(postDetail);
      await subreddit.save();

      res.json(subreddit);
    } else {
      res.json({ message: "Le post est déjà dans le subreddit" });
    }
  } catch (error) {
    console.error("Erreur à l'ajout du post au subreddit :", error.message);
    res.json({ error: error.message });
  }
};

export {
  ShowAllSubReddit,
  createSubReddit,
  DeleteSubReddit,
  addPostInSubReddit,
};
