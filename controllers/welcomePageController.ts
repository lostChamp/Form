import {Request, Response} from "express";

export class welcomePageController {
    static render(req: Request, res: Response) {
        res.render('welcomepage', {
            title: "MyPage"
        });
    }
}