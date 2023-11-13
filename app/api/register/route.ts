import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt, { genSalt } from "bcrypt";
import {NextResponse} from "next/server";

export const POST = async (request: any) => {
    const {fullName,email,password} = await request.json();
    await connect()
    if(!fullName || !email || !password){
        return new NextResponse("Please provide all fields",{status:401})
    }
    const exist = await User.findOne({email});
    if(exist){
        return new NextResponse("User already exist",{status:401})
    }
    const salt = await genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt)
    try{
        await User.create({fullName,email,password:hashedpassword});
        return new NextResponse("user created successfully",{status:200})
    }catch (err:any){
        return new NextResponse(err,{status:500})
    }
}