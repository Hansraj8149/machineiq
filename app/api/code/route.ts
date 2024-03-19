import {GoogleGenerativeAI} from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

const API_KEY:any= process.env.API_KEY;



const genAI = new GoogleGenerativeAI(API_KEY)

const model = genAI.getGenerativeModel({model: "gemini-pro"})
export async function POST(req:NextRequest) {
    try{
        const {userId}  = auth();
        const body = await req.json();
        // console.log(body);

        let prompt="You are a code generator. You must answer only in markdown code snippets. Use code comments as explanation! "
        
        const {message}  = body;
         prompt+= message[message.length-1].content;
        
        if(!userId) return new NextResponse("User not found!",{status: 401});
        if(!prompt) return new NextResponse("please enter the message", {status:400})
       const result:any= await model.generateContent(prompt)
      const response  = await result.response;
      const text= response.text();



        // console.log(response)
        return NextResponse.json(text, {status: 200})
    }
    catch(error:any) {
        console.log("an error occured", error);
        return NextResponse.json(error.message || "Internal sserver Error", {status: 500})
    }

}