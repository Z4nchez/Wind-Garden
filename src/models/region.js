import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
    nombre : String,
    titulo : String,
    imagen1 : String,
    imagen2 : String,
    imagen3 : String,
    articulo1 : String,
    articulo2 : String,
    articulo3 : String
})

export default mongoose.models.Region || mongoose.model("Region", regionSchema, "Region");