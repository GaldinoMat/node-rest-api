import { Router } from "express";
import UserController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Sets route http actions
router.post("/", UserController.store);
// Route using jwt authorization requirement middleware
router.get("/", loginRequired, UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
