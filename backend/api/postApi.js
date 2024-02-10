import { Router } from "express";
import { create, remove, update } from "./controller/postController.js";

const router = Router();

router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
