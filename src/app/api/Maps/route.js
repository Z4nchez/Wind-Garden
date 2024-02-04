import { connectDB } from "@/libs/mongodb";
import region from "@/models/region";
import { NextResponse } from "next/server";

export async function GET (){
    await connectDB()
    const regiones = await region.find();
    return NextResponse.json(regiones)
}

export async function POST (request){
    await connectDB()
    const data = await request.json()
    const elementoEncontrado = await region.find({nombre: data.nombre})
    return NextResponse.json(elementoEncontrado)   
}