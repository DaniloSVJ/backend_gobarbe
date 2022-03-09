import  {  Router } from "express";
import SessionsController from "../controller/SessionsController";
const sessions = Router();
const sessionsController = new SessionsController
sessions.post('/',sessionsController.create);

export default sessions