import { Router } from "express";
import { follow, get, remove, update } from "./controller/userController.js";

const router = Router();

router.put("/:id", update);
router.delete("/:id", remove);
router.get("/:id", get);

router.put("/follow/:id", follow);

export default router;
