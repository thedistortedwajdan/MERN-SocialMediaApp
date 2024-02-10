import postModel from "../../database/models/postModel.js";

const create = async (req, res) => {
  try {
    if (req.body.likes && req.body.likes.length > 0) {
      return res.status.json(400).json("no likes during create post");
    }
    const post = new postModel(req.body);
    await post.save();
    return res.status(200).json(post._doc);
  } catch (error) {
    console.log(`create => ${error.message}`);
    return res.status(500).json("server error");
  }
};

const update = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json("post not found");
    }
    if (post.userId !== req.body.userId) {
      return res.status(400).json("you can update only your post");
    }
    if (req.body.likes) {
      return res.status(400).json("cannot change likes");
    }
    await post.updateOne({ $set: req.body });
    return res.status(200).json("post updated");
  } catch (error) {
    console.log(`update => ${error.message}`);
    return res.status(500).json("server error");
  }
};

const remove = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json("post not found");
    }
    if (post.userId !== req.body.userId) {
      return res.status(400).json("you can delete only your post");
    }
    await post.deleteOne();
    return res.status(200).json("post deleted");
  } catch (error) {
    console.log(`remove => ${error.message}`);
    return res.status(500).json("server error");
  }
};

export { create, update, remove };
