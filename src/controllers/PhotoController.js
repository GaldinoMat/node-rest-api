import multer from "multer";
import multerConfig from "../config/multerConfig";
import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  // Photo base function
  store(req, res) {
    return upload(req, res, async (err) => {
      try {
        if (err) {
          return res.status(400).json({
            errors: [err.code],
          });
        }

        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const photo = await Photo.create({
          originalname,
          filename,
          student_id,
        });

        console.log(photo);

        return res.json(photo);
      } catch (error) {
        return res.status(400).json({
          errors: error,
        });
      }
    });
  }
}

export default new PhotoController();
