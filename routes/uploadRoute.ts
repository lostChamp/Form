import {upload} from "../middleware/upload.js";
import {Router} from "express";
import {uploadController} from "../controllers/uploadController.js";

export const uploadRoute = Router();

uploadRoute.get('/photo-up', uploadController.render);

uploadRoute.post('/photo-up', upload.single('photo'), uploadController.upload);



