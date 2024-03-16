import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';


const replicate = new Replicate({
  auth:process.env.REPLICATE_API_TOKEN
})



export async function POST(req:NextRequest) {
  try {
  const body = await req.json();

  const {prompt} = body;

  if(!prompt) { return new NextResponse("Prompt is required", {status:400})};



  const output:any = await replicate.run(
    "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
    {
      input: {
        fps: 8,
        prompt:prompt,
        num_frames: 50,
        num_inference_steps: 50
      }
    }
  );
  console.log(output);
  console.log(output);
  return new NextResponse(output, {status:200})
  }catch(error) {
    console.log("[VIDEO_ERROR]",error);
    return NextResponse.json("internal server error",{status:500})
  }

  
}