
import express from "express"
const router = express();
import multer from "multer";
// const upload = multer({dest: "uploads/"})
import {image}  from "../controllers/image.js"
// const { isAuth } = require("../middlewares/AuthMiddleware");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/uploads/')
    },
    filename: function (req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname)
    },
})

const upload = multer({ storage: storage })

router.post("/upload", upload.single("image"), image);

export default router;