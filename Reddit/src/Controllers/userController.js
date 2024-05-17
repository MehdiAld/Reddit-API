import User from "../Models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createUser = async (req, res) => {
  try {
    const newUser = new User();
    newUser.email = req.body.email;
    newUser.password = await newUser.crypto(req.body.password);

    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.send(error);
  }
};

const connectUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_secret
      );
      res.json({ token });
      console.log(token);
    } else {
      console.log("Échec de l'authentification. Identifiants invalides.");
      res.status(401).json({ error: "Vos identifiants sont invalides" });
    }
  } catch (error) {
    console.error("Erreur lors de la tentative de connexion:", error);
    res.status(500).json({ error: "Hello from the other side" });
  }
};

const disconnectUser = (req, res) => {
  res.clearCookie("token");

  res.json({ message: "Déconnexion réussie" });
};

export { createUser, connectUser, disconnectUser };
