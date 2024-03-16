import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils/cn"
import { GeistSans } from "geist/font/sans"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "bg-neutral-950")}>
        {children}
        <div className="overlay z-50" />
      </body>
    </html>
  )
}
