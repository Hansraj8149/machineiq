import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getApiKey } from '../submitapikey/route';

let OPENAI_API_KEY:any= getApiKey();

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
})

const instructionMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
    role: "system",
    content:"You are a code generator. You must answer only in markdown code snippets. Use code comments as explanation"
}


export async function POST(
    req:Request
) {
    try {
        const {userId}  = auth();
        const body = await req.json();
        const {message}  = body;

        if(!userId) return new NextResponse("User not found!",{status: 401});
        if(!openai.apiKey) return new NextResponse("OpenAI API Key not configured", {status: 500})
        if(!message) return new NextResponse("please enter the message", {status:400})




        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage, ...message]
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