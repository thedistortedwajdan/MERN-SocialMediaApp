import userModel from "../../database/models/userModel.js";

const update = async (req, res) => {
  try {
    // (req.body.id !== req.params.id || !req.user.isAdmin) &&
    req.body.id !== req.params.id && res.status(400).json("not authorized");
    const user = await userModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    if (user) {
      return res.status(200).json("user details updated");
    }
    return res.status(400).json("user does not exist");
  } catch (error) {
    console.log(`update => ${error.message}`);
    return res.status(500).json("server error");
  }
};

const remove = async (req, res) => {
  try {
    // (req.body.id !== req.params.id || !req.user.isAdmin) &&
    req.body.id !== req.params.id && res.status(400).json("not authorized");
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json("user removed");
    }
    return res.status(400).json("user does not exist");
  } catch (error) {
    console.log(`delete => ${error.message}`);
    return res.status(500).json("server error");
  }
};

const get = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(400).json("user does not exist");
    }
    const { password, ...rest } = user._doc;
    return res.status(200).json(rest);
  } catch (error) {
    console.log(`get => ${error.message}`);
    return res.status(500).json("server error");
  }
};

export { update, remove, get };
