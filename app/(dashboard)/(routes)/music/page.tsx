"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
import { UserAvatar } from "@/components/user-avatar"
import { BotAvatar } from "@/components/bot-avatar"
import { cn } from "@/lib/utils"
import { formSchema } from "../code/constants"
import { Heading } from "@/components/Heading"
import { Loader } from "@/components/Loader"
import { MusicIcon } from "lucide-react"
import {useRouter} from "next/navigation"
import { useProModal } from "@/hooks/useProModal"

 function Music() {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })
 
  // 2. Define a submit handler.
  const isLoading = form.formState.isSubmitting;
 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
setMusic(undefined);
   const response = await axios.post('api/music',values);
   console.log(response);
   setMusic(response.data);
  
    form.reset();

   }catch(error:any) {
    console.log(error);
    if(error?.response?.status===403) proModal.onOpen();

   }finally{
    router.refresh();
   }
  }

  return ( 
    <div>
      <Heading
        title="Music"
        description="Our most advanced Music model."
        icon={MusicIcon}
        iconColor="text-emerald-700"
        bgColor="bg-emerald-700/10"
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
                        placeholder="Edo25 major g melodies that sound triumphant and cinematic. Leading up to a crescendo that resolves in a 9th harmonic"
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
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {/* {messages.length === 0 && !isLoading && (
            <Empty label="No Music started." />
          )} */}
          {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
        </div>
      </div>
    </div>
   );

}
export default Music;