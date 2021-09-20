import { Router } from "express";
import UserController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Sets route http actions

// These routes shouldn't exist, use for tests only
// router.get("/", UserController.index);
// router.get("/:id", UserController.show);

router.post("/", UserController.store);

// Routes using jwt authorization requirement middleware
router.put("/", loginRequired, UserController.update);
router.delete("/", loginRequired, UserController.delete);

export default router;
