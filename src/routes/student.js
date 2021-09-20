import { Router } from "express";
import StudentController from "../controllers/StudentController";

const router = new Router();

// Sets route http actions
router.get("/", StudentController.index);

export default router;
