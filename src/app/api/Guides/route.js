import { connectDB } from "@/libs/mongodb";
import guide from "@/models/guide";
import { NextResponse } from "next/server";

export async function GET (){
    await connectDB()
    const guides = await guide.find();
    return NextResponse.json(guides)
}

export async function POST (request){
    await connectDB()
    const data = await request.json()
    const elementoEncontrado = await guide.find({tipo: data.tipo})
    return NextResponse.json(elementoEncontrado)   
}