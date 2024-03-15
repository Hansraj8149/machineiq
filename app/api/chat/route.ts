import {GoogleGenerativeAI} from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server';

const API_KEY:any=process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);


export async function POST(req:NextRequest) {
    const model = genAI.getGenerativeModel({model:"gemini-pro"});

    const prompt= "who are you?";

    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = response.text();
    console.log(text);
    return new NextResponse(text);
}