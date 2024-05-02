import Invitados from "@/models/Invitados";
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";

export async function GET(){
    await connectDB()
    const users = await Invitados.find()
    return new NextResponse().json(users)
}

export async function POST(request){
    await connectDB()
    const data = await request.json()
    const users = await Invitados.create(data)
    return new NextResponse().json(users)
}