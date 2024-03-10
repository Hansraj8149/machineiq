'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Process from "@/components/Process"
import { useEffect, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation"

export default function Component() {
  const [apiKey, setApiKey] = useState('');
const router = useRouter();
  const handleSubmit = async () => {
  

    // Validate apiKey if needed

    // Send the API key to the server
    if(!apiKey.length) {
      alert("Please Enter ApiKey")
    }else {
    await axios.post('http://localhost:3001/api/submitapikey', {
      apiKey:apiKey
    });
    router.push('/dashboard')
  }

  };
  return (
    <>
    <div className="  bg-[#111827] flex flex-col items-center justify-center min-h-screen gap-4 text-center py-8 px-4">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-6 gap-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-white">Welcome to MachineIQ</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-10">
            To get started with MachineIQ. you have to provide your OpenAI Api key. The process to Generate One is below
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Input required onChange={(e)=> setApiKey(e.target.value)} value={apiKey} className="flex-1 max-w-[400px]" placeholder="Enter Your OpenAI Apikey" type="text" />
          <Button onClick={handleSubmit} className="w-full max-w-[200px]">
            Submit
          </Button>
        </div>
      </div>
  
    
    </div>

        <Process/>
    </>
  )
}

