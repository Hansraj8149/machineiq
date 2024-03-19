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

  const {prompt,amount=1,resolution="512x512"} = body;
  if(!userId) return new NextResponse("User not found!",{status: 401});

  if(!prompt) { return new NextResponse("Prompt is required", {status:400})};
  if(!amount) { return new NextResponse("Amount is required", {status:400})};
  if(!resolution) { return new NextResponse("Resolution is required", {status:400})};

  const splitedResolution = resolution.split('x');
  const width=Number(splitedResolution[0]);
  const height=Number(splitedResolution[1]);
  const amountN= Number(amount);

  const freeTrail = await checkApiLimit();
  if(!freeTrail) return new NextResponse("Free trail has expired",{status: 403});
  const output:any = await replicate.run(
    "lucataco/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
    {
      input: {
        seed: 2992471961,
        width: width,
        height: height,
        prompt: prompt,
        scheduler: "K_EULER",
        num_outputs: amountN,
        guidance_scale: 0,
        negative_prompt: "worst quality, low quality",
        num_inference_steps: 4
      }
    }
  );
  return new NextResponse(output, {status:200})
  }catch(error) {
    console.log("[IMAGE_ERROR]",error);
    return NextResponse.json("internal server error",{status:500})
  }

  
}