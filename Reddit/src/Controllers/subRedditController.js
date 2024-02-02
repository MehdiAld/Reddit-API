import SubReddit from "../Models/subRedditModel";

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

export { ShowAllSubReddit, createSubReddit, DeleteSubReddit };
