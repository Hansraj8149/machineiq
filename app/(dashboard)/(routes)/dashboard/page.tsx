'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, Code, ImageIcon, MessageCircle, Music, VideoIcon } from "lucide-react"

import { useRouter } from "next/navigation"
const tools = [
 
  {
    label: "Conversation",
    icon: MessageCircle,
    color: "text-violet-700",
    bgColor: "bg-violet-700/10",
     href: '/conversation'
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-sky-700",
    href: '/code',
    bgColor: "bg-sky-700/10",

  },
 
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
    bgColor: "bg-pink-700/10",

  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-700",
    href: '/music',
    bgColor: "bg-emerald-700/10",

  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
    bgColor: "bg-orange-700/10",

  },
  
  
]
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
