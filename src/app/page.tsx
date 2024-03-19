import { AuroraBackground } from "@/components/ui/aurora-background"
import { Scene } from "@/components/cloud"
import { Bento } from "@/components/bento"

export default function Page() {
  return (
    <main className="flex flex-col text-neutral-200">
      <div className="absolute top-[100vh] z-0 h-[100vh] w-full bg-gradient-to-b from-neutral-950 to-neutral-900" />
      <div className="absolute inset-0 z-20 h-screen w-screen bg-gradient-to-b from-transparent from-90% to-neutral-950" />

      <AuroraBackground />

      <section className="flex h-[250vh] xl:-mb-[50vh]">
        <div className="dashed-grid absolute inset-0 z-10 h-screen w-full" />

        <div className="sticky inset-0 z-30 h-screen w-screen">
          <Scene />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-neutral-900 py-96">
        <Bento />
      </section>
    </main>
  )
}
