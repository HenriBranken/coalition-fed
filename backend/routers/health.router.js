const express = require("express");
const getHealth = require("../controllers/health.controller.js");
const getOriginalData = require("../controllers/originalData.controller.js");

const authRouter = express.Router();

authRouter.get("/", getHealth);
authRouter.get("/original", getOriginalData);

module.exports = authRouter;