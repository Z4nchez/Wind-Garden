import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
    nombre : String,
    tipo: String,
    descripcion : String,
    descripcion2 : String,
    imagen : String
})

export default mongoose.models.Crop || mongoose.model("Crop", cropSchema, "Crop");