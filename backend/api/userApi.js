import { Router } from "express";
import {
  follow,
  get,
  remove,
  unfollow,
  update,
} from "./controller/userController.js";

const router = Router();

router.put("/:id", update);
router.delete("/:id", remove);
router.get("/:id", get);

router.put("/follow/:id", follow);
router.put("/unfollow/:id", unfollow);

export default router;
