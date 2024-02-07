import userModel from "../../database/models/userModel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { name, email, password: plainPassword, username } = req.body;
    const isEmail = await userModel.findOne({ email });
    isEmail && res.status(400).json("user exists");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      username,
    });
    const { password, ...rest } = await user.save();
    res.status(200).json(rest._doc);
  } catch (error) {
    res.status(500).json(`register => ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const { email, password: plainPassword } = req.body;
    const isEmail = await userModel.findOne({ email });
    !isEmail && res.status(400).json("user does not exist");
    const compare = await bcrypt.compare(plainPassword, isEmail.password);
    !compare && res.status(400).json("incorrect password");
    const { password, ...rest } = isEmail;
    res.status(200).json(rest._doc);
  } catch (error) {
    res.status(500).json(`login => ${error.message}`);
  }
};

export { register, login };
