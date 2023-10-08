
import express from "express"
const router = express();

import {loginUser}  from "../controllers/login.js"
// const { isAuth } = require("../middlewares/AuthMiddleware");

router.post("/login", loginUser);

export default router;