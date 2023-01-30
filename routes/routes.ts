import express from "express";
import { regRoute } from "./regRoute.js";


export const routes =  express.Router();

routes.use(regRoute);