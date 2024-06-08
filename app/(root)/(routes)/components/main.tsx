import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Main() {
  return (
    <main className="grid gap-y-5 mt-2">
      <h2 className="font-normal text-2xl text-slate-50 text-balance text-center">
        Encontrá el trago perfecto para hoy
      </h2>

      <div className="flex w-full h-full justify-center">
        <Button
          className="shadow-[0_4px_0_0] shadow-purple-600 text-sm px-8 active:translate-y-1 active:shadow-none transition-all duration-200 mt-10 text-slate-50 bg-gradient-to-r from-pink-500 to-purple-900 hover:to-purple-800 hover:from-pink-400"
          variant={"secondary"}
          size={"lg"}
        >
          <Play className="mr-2" />
          Empezar!
        </Button>
      </div>

      <p className="mt-1 text-center text-sm text-slate-50">
        <a href="#">Ver menú completo</a>
      </p>
    </main>
  );
}
