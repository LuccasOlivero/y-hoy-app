import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Main() {
  return (
    <main className="grid gap-y-5 mt-2 h-full">
      <h2 className="font-light text-2xl text-[#267b40] text-balance text-center">
        Encontrá el trago perfecto para hoy
      </h2>

      <div className="flex w-full h-full justify-center">
        {/* quiero un gradiente del color principal a un tono mas oscuro */}
        <Link href="/survey">
          <Button
            className="shadow-[0_4px_0_0] shadow-[#B89B62] text-sm px-8 active:translate-y-1 active:shadow-none transition-all duration-200 mt-10 text-slate-50 bg-gradient-to-r from-[#267b40] to-[#2F9D5C] hover:to-[#267b40] hover:from-[#309A50]"
            variant="secondary"
            size="lg"
          >
            <Play className="mr-2" />
            Empezar!
          </Button>
        </Link>
      </div>

      <p className="mt-1 text-center text-sm text-[#A98A4D]">
        <a href="/menu">Ver menú completo</a>
        <p className="text-normal ">us English</p>
      </p>
    </main>
  );
}
