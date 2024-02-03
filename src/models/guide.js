import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
    name : String,
    title : String,
    article1 : String,
    img1 : String
})

export default mongoose.models.Guide || mongoose.model("Guide", guideSchema, "Guide");