import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css" // Yeh line styling load karti hai
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
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-red-900/30`}>
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

          </div>
        </div>
      </section>
    </main>
  )
}
