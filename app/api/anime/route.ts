import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
 const HF_TOKEN= process.env.HUGGINGFACE_API_KEY;


export async function POST(req:NextRequest){
try {
  const {userId} = auth();
  const body = await req.json();

  const {prompt,} = body;

  if(!userId) return new NextResponse("User not found!",{status: 401});
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/cagliostrolab/animagine-xl-3.1",
    prompt,
    {
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      responseType: "arraybuffer",
    }
  );
  


  const base64Data = Buffer.from(response.data).toString("base64");
  const imageUrl = `data:image/png;base64,${base64Data}`;
// console.log(imageUrl);
  return new NextResponse(imageUrl, { status: 200 });
  }catch(error) {
    console.log("[ANIME_ERROR]",error);
    return NextResponse.json("internal server error",{status:500})
  }

  
}



