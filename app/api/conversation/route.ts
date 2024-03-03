import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})



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
            messages: [{"role": "user", "content": "Hello!"}],
          });
          console.log(response.choices[0].message);
        return NextResponse.json(response.choices[0].message)

    }catch(error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal ERROR", {status: 500})
    }
}