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

import { Download, Palette } from "lucide-react"
import { Heading } from "@/components/Heading"
import { Loader } from "@/components/Loader"
import {  formSchema} from "./constants"
import { Card, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

function downloadImage(base64Data:string, fileName:string) {
  const byteCharacters = atob(base64Data); // Decode base64 data
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: 'image/png' }); // Create Blob from byte arrays
  const url = window.URL.createObjectURL(blob); // Create URL object from Blob
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url); // Release the object URL
}

 function Anime() {
  const router = useRouter();
const [url, setUrl] = useState<string>('')
const handleDownload = ()=> {
  if(url) {

    const base64Data = url.split(",")[1];
    const fileName = "generated_image.png";
    downloadImage(base64Data,fileName)
  }
}
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })


  const isLoading = form.formState.isSubmitting;
 async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    // stripePriceId(values)
   setUrl('');
    const response:any = await axios.post("/api/anime", values);
  console.log(response.data)
     setUrl(response.data);
     console.log(url);
   }catch(error:any) {
    console.log(error);
   }finally{
    router.refresh();
   }
  }

  return ( 
    <div>
      <Heading
        title="Anime Characters"
        description="Our most advanced Anime Character Generation model."
        icon={Palette}
        iconColor="text-sky-700"
        bgColor="bg-sky-700/10"
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
                        placeholder="A beautiful anime girl in a Japanese kimono stands among cherry blossoms wearing long flowing hair." 
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
        
          
      {url &&     <div className="grid grid-cols-1 mt-8">
           <Card key={url} className="rounded-lg overflow-hidden">
               <div className="relative aspect-square">
                 <Image
                   fill
                   alt="Generated"
                   src={url}
                 /> 
               </div>
               <CardFooter className="p-2">
                 <Button onClick={handleDownload} variant="secondary" className="w-full">
                   <Download className="h-4 w-4 mr-2" />
                   Download
                 </Button>
               </CardFooter>
             </Card>
        
         </div>
         }
        </div>
      </div>
    </div>
   );

}
export default Anime;