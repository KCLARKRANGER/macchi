import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Macchi Connected Intelligence | DeltaPoint Partners",
  description: "A private, connected intelligence built around the Macchi practice—always learning, preparing, remembering, watching, and surveying.",
}

export const viewport: Viewport = {
  themeColor: "#f5f2eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
