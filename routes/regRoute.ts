import bodyParser from "body-parser";
import { Router } from "express";
import { regController } from "../controllers/regController.js";

export const regRoute = Router();
const urlencodedParse = bodyParser.urlencoded({extended: false});
const regControllerClass = new regController;

regRoute.post('/reg', urlencodedParse, regControllerClass.register);



