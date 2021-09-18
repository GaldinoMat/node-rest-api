import { Router } from "express";
import HomeController from "../controllers/HomeController";

const router = new Router();

// Sets route http actions
router.get("/", HomeController.index);

export default router;
