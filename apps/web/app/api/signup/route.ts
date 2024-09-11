import { NextRequest, NextResponse } from "next/server";
import  prisma from "@repo/db/client";

export async function POST( req : NextRequest ){
    const {email ,password,username} = await req.json();
    if(!email || !password || !username){
        return NextResponse.json(
            {
                error: "Please provide all the required fields"
            },
            {
                status: 400
            }
        );
    }

    try {
        const checkUser = await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(checkUser){
            return NextResponse.json({
                error: "User already exists"
            },{
                status: 400
            })
        }
        const user = await prisma.user.create({
            data:{
                email,
                password,
                username
            },
            select:{
                id:true,
                email:true,
                username:true
            }
        })
        if(!user){
            return NextResponse.json(
                {
                    error: "error while creating user"
                },
                {
                    status: 400
                }
            );    
        }
        return NextResponse.json({
            msg : "User created successfully"
        },{
            status: 200,
        });
    } catch (error) {
                return NextResponse.json(
            {
                error: "Something went wrong"
            },
            {
                status: 500
            }
        ); 
    }
}