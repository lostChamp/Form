import multer, { FileFilterCallback } from "multer";
import moment from "moment";
import { Request} from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
    destination(req, file: Express.Multer.File, cb: DestinationCallback): void{
        cb(null, 'pict/');
    },
    filename(req, file: Express.Multer.File, cb: FileNameCallback){
        const date = moment().format('DDMMYYYY-HHmmss_SSS');
        cb(null, `${date} - ${file.originalname}`)
    }
});
const filter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: filter
});

export {upload}
