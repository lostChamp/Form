import { Request, Response } from "express";
import {pool} from "../db/db.js";

export class regController {
    async createUser(req: Request, res: Response) {
        const {fname, sname, name, email, pass} = req.body;
        const newPerson = await pool.query('INSERT INTO "user" (f_name, s_name, user_name, email, password)' +
            ' values($1, $2, $3, $4, $5) RETURNING *', [fname, sname, name, email, pass]);
        // res.json(newPerson);

        res.render('reg-tnx', {
            title: "OK"
        });
    }

    render(req: Request, res: Response) {
        res.render('reg');
    }
}
