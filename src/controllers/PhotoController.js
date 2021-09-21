import multer from "multer";
import multerConfig from "../config/multerConfig";
import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  // Photo base function
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const photo = await Photo.create({
          originalname,
          filename,
          student_id,
        });

        return res.json(photo);
      } catch (error) {
        return res.status(400).json({
          errors: ["Error 400 - Student does not exist"],
        });
      }
    });
  }
}

export default new PhotoController();
