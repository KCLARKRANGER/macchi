import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Macchi × DeltaPoint Partners | Scale Blueprint",
  description:
    "Five high-impact AI use cases designed to scale DeltaPoint Partners' expertise.",
}

export const viewport: Viewport = {
  themeColor: "#f4f7fb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
