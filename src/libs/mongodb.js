import mongoose from "mongoose";

export async function connectDB (){
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@proyects.kxrihqg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)   
}