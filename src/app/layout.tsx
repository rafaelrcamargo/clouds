import type { PropsWithChildren } from "react"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib"
import "./globals.css"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "bg-neutral-950")}>
        {children}
        <div className="overlay z-50" />
      </body>
    </html>
  )
}
