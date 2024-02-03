import { connectDB } from "@/libs/mongodb";
import crop from "@/models/crop";
import { NextResponse } from "next/server";

export async function GET (){
    await connectDB()
    const crops = await crop.find();
    return NextResponse.json(crops)
}

export async function POST (request){
    await connectDB()
    const data = await request.json()
    const elementoEncontrado = await crop.find({tipo: data.tipo})
    return NextResponse.json(elementoEncontrado)   
}