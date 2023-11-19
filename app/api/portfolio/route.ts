import connect from "@/utils/db";
import { NextResponse } from "next/server";
// import Portfolio from "@/models/Portfolio"
connect();

// type Skill = {
    
// }
// type Experience = {

// }
// type Project = {

// }
// type Video = {

// }
// export async function POST(request:Request){
//     const {type}:any = await request.json();
//     console.log(type);
//     const port = await Portfolio.find({user:"kel"})
//     if(type == "skill"){
//         const skill = await Portfolio.create()
//     }
//     return NextResponse.json(type)
// }

export async function PATCH(request:Request){
    const skill:any = await request.json();
    console.log(skill); 
    return NextResponse.json(skill)
}

export async function DELETE(request:Request){
    const skill:any = await request.json();
    console.log(skill);
    return NextResponse.json(skill)
}
