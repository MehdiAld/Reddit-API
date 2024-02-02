import User from "../Models/userModel";

const createUser = async (req, res) => {
  try {
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.send(error);
  }
};

const connectUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password }).select("+password");
    res.json("Vous etes actuellement connecté");
  } catch (error) {
    console.error(error.message);
    res.send(error.message);
  }
};

export { createUser, connectUser };
