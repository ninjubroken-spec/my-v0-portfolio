import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// Niche wale imports ko dhyan se dekho, yahan rasta badal diya hai
import { ThemeProvider } from "./components/theme-provider"
import { CRTOverlay } from "./components/crt-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BROKEN | Portfolio",
  description: "Community Creative & Blockchain Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CRTOverlay />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
