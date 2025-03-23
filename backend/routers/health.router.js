import { Router } from "express";
// import { basicAuthentication } from "../middleware/basicAuth.js";
import getHealth from "../controllers/health.controller.js";

const authRouter = Router();

authRouter.get("/", getHealth);

export default authRouter;