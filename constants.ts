import { Code, ImageIcon, MessageCircle, Music, Palette, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS=0;

export const tools = [
 
    {
      label: "Conversation",
      icon: MessageCircle,
      color: "text-teal-700",
      bgColor: "bg-teal-700/10",
       href: '/conversation'
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-pink-700",
      href: '/code',
      bgColor: "bg-pink-700/10",
  
    },
   
    {
      label: 'Anime Generation',
      icon: Palette,
      color: "text-sky-700",
      href: '/anime',
      bgColor: "bg-sky-700/10",
  
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-rose-700",
      href: '/image',
      bgColor: "bg-rose-700/10",
  
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
      color: "text-amber-700",
      href: '/video',
      bgColor: "bg-amber-700/10",
  
    },
    
    
  ]