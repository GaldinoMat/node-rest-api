import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multerConfig";
import PhotoController from "../controllers/PhotoController";

const router = new Router();

const upload = multer(multerConfig);

// Sets route http actions
router.post("/", upload.single("photo"), PhotoController.store);

export default router;
