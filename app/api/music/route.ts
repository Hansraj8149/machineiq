import { checkApiLimit } from '@/lib/api_limit';
import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';


const replicate = new Replicate({
  auth:process.env.REPLICATE_API_TOKEN
})



export async function POST(req:NextRequest) {
  try {
    const {userId} = auth();
  const body = await req.json();

  const {prompt} = body;
  if(!userId) return new NextResponse("User not found!",{status: 401});
  if(!prompt) return new NextResponse("please enter the message", {status:400})
  const freeTrail = await checkApiLimit();
if(!freeTrail) return new NextResponse("Free trail has expired",{status: 403});

 



  const output:any = await replicate.run(
    "meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38",
    {
      input: {
        top_k: 250,
        top_p: 0,
        prompt: prompt,
        duration: 33,
        temperature: 1,
        continuation: false,
        model_version: "stereo-large",
        output_format: "wav",
        continuation_start: 0,
        multi_band_diffusion: false,
        normalization_strategy: "peak",
        classifier_free_guidance: 3
      }
    }
  );

  return new NextResponse(output, {status:200})
  }catch(error) {
    console.log("[IMAGE_ERROR]",error);
    return NextResponse.json("internal server error",{status:500})
  }

  
}