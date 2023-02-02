import { Request, Response } from "express";
export class uploadController {
    static upload(req: Request, res: Response) {
        res.render('reg-tnx');
    }

    static  render(req: Request, res: Response) {
        res.render('photo-up');
    }
}
