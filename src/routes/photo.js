import { Router } from "express";

import PhotoController from "../controllers/PhotoController";

const router = new Router();

// Sets route http actions
router.post("/", PhotoController.store);

export default router;
