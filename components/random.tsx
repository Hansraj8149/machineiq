/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K6ubEj1PJJe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#00796b] flex flex-col items-center justify-center">
      <div className="mb-8">
        <LockIcon className="text-white h-16 w-16" />
      </div>
      <div className="text-center text-white mb-4">
        <h1 className="text-xl font-semibold">登录</h1>
        <p className="text-sm">基于ARM的智能车间物联网控制系统</p>
      </div>
      <form className="w-full max-w-xs">
        <div className="mb-4">
          <Input className="w-full" placeholder="手机号" type="text" />
        </div>
        <div className="mb-6">
          <Input className="w-full" placeholder="密码" type="password" />
        </div>
        <div className="flex items-center justify-between mb-6">
          <Button className="bg-[#009688] text-white w-full">登录</Button>
        </div>
        <div className="text-center">
          <Link className="inline-block align-baseline font-bold text-sm text-white hover:text-white" href="#">
            忘记密码
          </Link>
        </div>
      </form>
    </div>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
