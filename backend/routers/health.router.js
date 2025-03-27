const express = require("express");
const getHealth = require("../controllers/health.controller.js");

const authRouter = express.Router();

authRouter.get("/", getHealth);

module.exports = authRouter;