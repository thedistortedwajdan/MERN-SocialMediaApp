import { Router } from "express";
import {
  create,
  get,
  getAll,
  like_dislike,
  remove,
  update,
} from "./controller/postController.js";

const router = Router();

router.get("/:id", get);
router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.put("/like_dislike/:id", like_dislike);
router.delete("/:id", remove);

export default router;
