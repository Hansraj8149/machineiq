import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                <div className="relative h-5 w-20 mt-4 animate-pulse">
        <Image
          alt="Logo"
          src="/logon.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        MachineIQ is thinking...
      </p>
    </div>
  );
};