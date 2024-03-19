import type { PropsWithChildren } from "react"
import { GeistSans } from "geist/font/sans"

import "./globals.css"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="overflow-x-hidden bg-neutral-950">
        {children}
        <div className="overlay z-50" />
      </body>
    </html>
  )
}
