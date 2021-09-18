import { Router } from "express";
import TokenController from "../controllers/TokenController";

const router = new Router();

// Sets route http actions
router.post("/", TokenController.store);

export default router;
