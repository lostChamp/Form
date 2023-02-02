import {Router} from "express";
import {welcomePageController} from "../controllers/welcomePageController.js";
export const welcomePageRoute = Router();

welcomePageRoute.get('/', welcomePageController.render);