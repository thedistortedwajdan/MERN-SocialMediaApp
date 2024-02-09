import { Router } from "express";
import { get, remove, update } from "./controller/userController.js";

const router = Router();

router.put("/:id", update);
router.delete("/:id", remove);
router.get("/:id", get);

export default router;
