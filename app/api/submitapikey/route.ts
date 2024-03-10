

import { NextRequest, NextResponse } from "next/server";
let apiKey = '';

export const setApiKey = (newApiKey:string) => {
  apiKey = newApiKey;
};
console.log(apiKey)

export const getApiKey = () => apiKey;
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body.apiKey)
  setApiKey(body.apiKey);
  return NextResponse.json({ apiKey: body.apiKey });
}
