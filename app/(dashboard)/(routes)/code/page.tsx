"use client"
import {Heading} from '@/components/Heading'
import { Code } from 'lucide-react'
import {z} from 'zod'
import React, { useState } from 'react'
import axios from 'axios'
import OpenAI from 'openai'
// import {ChatCompletionRequestMessage} from 'openai'
import { useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { zodResolver } from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/Loader'
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/user-avatar'
import { BotAvatar } from '@/components/bot-avatar'

import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/navigation'

// import { useRouter } from 'next/router'



function CodePage() {
  const router = useRouter();
  const [messages, setMessages]:any  = useState([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })
 

  const isLoading = form.formState.isSubmitting;
 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {

    const userMessage= {
      role:"user",
      content: values.prompt,
    };
    const newMessage:any = [...messages, userMessage];
    const response = await axios.post('/api/code', {
      message:newMessage
    });
    const botMessage = {
      role:'bot',
      content:response.data
    }
  
  
    // newMessage.result = response.data;
    // console.log(newMessage)
    // console.log(botMessage);
    setMessages((current:any)=> [...current, userMessage, botMessage]);
    console.log(messages);
    form.reset();

   }catch(error) {
    console.log(error);
   }finally{
    router.refresh();
   }
  }
  return (
    <div>
    <Heading
      title="Code Generation"
      description="Gneerate code using descriptive text."
      icon={Code}
      iconColor="text-pink-700"
      bgColor="bg-pink-700/10"
    />
    <div className="px-4 lg:px-8">
      <div>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading} 
                      placeholder="simple toggole button using react hooks" 
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
      </div>
      <div className="space-y-4 mt-4">
        {isLoading && (
          <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'><Loader/></div>
        )}
       
        <div className="flex flex-col-reverse gap-y-4">
          {messages.map((message:any) => (
          <div key={message.content} className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg ", message.role==='user'?"bg-white border border-black/10":"bg-muted")}>
            {message.role=='user'?<UserAvatar/>:<BotAvatar/>}
            {/* {console.log(message.role)} */}
           <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-[#868381]/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-[#EBE6E3]/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7">
                  {message.content || ""}
                </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
        </div>
    </div>
  )
}

export default CodePage
