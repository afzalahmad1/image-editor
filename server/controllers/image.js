import {Image} from "../models/Image.js"
const image = async(req,res)=>{
    // console.log(req.file);
    const imageName = req.file.filename;
    const imageUrl = req.file.path;
    // console.log(imageUrl);
    try {
        await Image.create({image: imageName})
        res.status(200).json({
            path:imageUrl,
            message:"image saved"})
    } catch (error) {
        res.status(200).json({
            path:imageUrl,
            message: error})
    }
}
export {image}