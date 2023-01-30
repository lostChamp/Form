import { Request, Response } from "express";


export class regController {
    register(req: Request, res: Response) {
        if (!req.body) {
            res.sendStatus(400);
        }

        console.log(`Имя пользователя: ${req.body.name} Введенный пароль: ${req.body.pass}`);

        res.render('reg-tnx', {
            title: "OK"
        });
    }
}
