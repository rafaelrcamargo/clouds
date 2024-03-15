import { Bento } from "@/components/bento"
import { Cloudd } from "../components/cloud"

export default function Home() {
  return (
    <main className="flex flex-col text-neutral-200">
      <div className="absolute top-[100vh] z-0 h-[100vh] w-full bg-gradient-to-b from-neutral-950 to-neutral-900" />

      <section className="flex h-[200vh] [-webkit-mask:linear-gradient(0deg,transparent,white_50%)] xl:-mb-[25vh]">
        <div className="dashed-grid absolute inset-0 z-0 h-screen w-full" />

        <div className="sticky inset-0 h-screen w-screen">
          <Cloudd />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center bg-neutral-900 py-96">
        <Bento />
      </section>
    </main>
  )
}
