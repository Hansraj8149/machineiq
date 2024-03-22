'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight,Palette, Code, ImageIcon, MessageCircle, Music, VideoIcon } from "lucide-react"
import { tools } from "@/constants"
import { useRouter } from "next/navigation"

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div >
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center"> Explore the power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center"> Discover the magic of AI - Chat with the smartest digital brains!</p>

      </div>
      <div className="px-4  md:px-20 lg:px-32 space-y-4 gap-6 grid lg:grid-cols-2">
        {/* <div className="w-2/4 bg-red-300"> */}
        {tools.map((tool) => (

          <Card key={tool.href} 
          onClick={() => router.push(tool.href)}
          className={cn("p-4 border-black/5 flex h-40 items-center justify-between hover:shadow-md transition cursor-pointer", tool.bgColor)}>
          <div className="items-center gap-4">
          <div className={cn("p-2  rounded-md", tool.bgColor)}>
            <tool.icon className={cn("w-7 h-7", tool.color)}/>

          </div>
          <div className="font-semibold">{tool.label}</div>

          </div>
          <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
        </div>
      {/* </div> */}

    </div>
  )
}

export default DashboardPage
