import express from "express"
const router = express();

import registerUser  from "../controllers/signup.js"
// const { isAuth } = require("../middlewares/AuthMiddleware");

router.post("/register", registerUser);
// router.post("/login", loginUser);

export default router;