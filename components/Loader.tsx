import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
                <div className="relative h-8 w-8 mt-4 animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        MachineIQ is thinking...
      </p>
    </div>
  );
};