'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, Code, ImageIcon, LayoutDashboard, MessageSquare, Music, VideoIcon } from "lucide-react"

import { useRouter } from "next/navigation"
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-voilet-400",
    bgColor: "bg-voilet-400/10",
     href: '/conversaion'
  },
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",

  },
 
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
    bgColor: "bg-pink-700/10",

  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
    bgColor: "bg-orange-700/10",

  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
    bgColor: "bg-emeraid-500/10",

  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
    bgColor: "bg-green-700/10",

  },
]
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div >
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center"> Explore the power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center"> Chat with the smartes AI - Experience the power of AI</p>

      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card key={tool.href} 
          onClick={() => router.push(tool.href)}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
          <div className="items-center gap-4">
          <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
            <tool.icon className={cn("w-8 h-8", tool.color)}/>

          </div>
          <div className="font-semibold">{tool.label}</div>

          </div>
          <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default DashboardPage
