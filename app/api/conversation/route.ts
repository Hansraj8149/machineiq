import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getApiKey } from '../submitapikey/route';
let OPENAI_API_KEY:string = getApiKey();


    console.log(OPENAI_API_KEY)
    const openai = new OpenAI({
        apiKey:OPENAI_API_KEY
    })
    
    
    export async function POST(
        req:Request
) {
    try {
        const {userId}  = auth();
        const body = await req.json();
        const {message}  = body;
        
        console.log(OPENAI_API_KEY)
        if(!userId) return new NextResponse("User not found!",{status: 401});
        if(!openai.apiKey) new NextResponse("Api key not configured", {status:500})
        if(!message) return new NextResponse("please enter the message", {status:400})




        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": "Hello!"}],
          });
        //   console.log(response.choices[0].message);
        return NextResponse.json(response.choices[0].message)

    }catch(error:any) {
        console.log("[CODE_ERROR]", error);
        if(error.type==='insufficient_quota') {
        return  NextResponse.json({content:"You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors."})

        }
        return new NextResponse("Internal Error", { status: 500 });
    }
}