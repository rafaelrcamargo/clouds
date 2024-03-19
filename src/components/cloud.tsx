"use client"

import type { PropsWithChildren } from "react"
import { motion as m, useScroll, useTransform } from "framer-motion"
import { Clouds, Cloud, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const Wrapper = ({ children }: PropsWithChildren) => {
  const { scrollYProgress } = useScroll()

  const opacitySpan = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const opacityH1 = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <m.span
        style={{ opacity: opacitySpan }}
        className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-wrap whitespace-pre text-4xl font-black text-neutral-200 drop-shadow-[0_0_8px_#0006] xl:-z-20 xl:flex-nowrap xl:gap-6 xl:text-8xl">
        The<span className="italic">future-proof</span>cloud.
      </m.span>

      <m.h1
        style={{ opacity: opacityH1 }}
        className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-wrap whitespace-pre text-4xl font-black text-transparent xl:flex-nowrap xl:gap-6 xl:text-8xl">
        The
        <span className="z-20 italic text-neutral-200 drop-shadow-[0_0_8px_#0003]">
          future-proof
        </span>
        cloud.
      </m.h1>

      {children}
    </>
  )
}

export const Scene = () => (
  <Wrapper>
    <Canvas camera={{ position: [0, 60, 0] }}>
      <Inner />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={0}
        enableZoom={false}
      />
    </Canvas>
  </Wrapper>
)

const Inner = () => {
  useFrame(({ camera }) => (camera.position.y = -window.scrollY * 0.04 + 60))

  return (
    <Clouds material={THREE.MeshBasicMaterial}>
      <Cloud
        volume={24}
        segments={56}
        bounds={[8, 16, 2]}
        position={[0, 25, 0]}
        color="#e0e0e0"
        concentrate="inside"
      />
    </Clouds>
  )
}
