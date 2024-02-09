import userModel from "../../database/models/userModel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const { name, email, password: plainPassword, username } = req.body;
    const isEmail = await userModel.findOne({ email });
    if (isEmail) {
      return res.status(400).json("user exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      username,
    });
    await user.save();
    const { password, ...rest } = user._doc;
    return res.status(200).json(rest);
  } catch (error) {
    console.log(`register => ${error.message}`);
    return res.status(500).json("server error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password: plainPassword } = req.body;
    const isEmail = await userModel.findOne({ email });
    if (!isEmail) {
      return res.status(400).json("user does not exist");
    }
    const compare = await bcrypt.compare(plainPassword, isEmail.password);
    if (!compare) {
      return res.status(400).json("ivalid credentials");
    }
    const { password, ...rest } = isEmail._doc;
    return res.status(200).json(rest);
  } catch (error) {
    console.log(`login => ${error.message}`);
    return res.status(500).json("server error");
  }
};

export { register, login };
