import { IdentityMorph } from "@/components/identity-morph"
import { CherryBlossoms } from "@/components/cherry-blossoms"
import { CRTOverlay } from "@/components/crt-overlay"
import { ScrambleText } from "@/components/scramble-text"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare, ExternalLink, Mail, Zap, Shield, Target } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden">
      <CRTOverlay />
      <CherryBlossoms />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/banner.jpg"
            alt="Samurai Background"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        
        <div className="z-10 text-center space-y-6 max-w-4xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_rgba(139,0,0,0.5)]">
            <Image
              src="/images/profile.webp"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          
          <IdentityMorph />
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-mono text-muted-foreground">
              <ScrambleText delay={0.5}>Community Creative & Blockchain Enthusiast</ScrambleText>
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link href="https://github.com/ninjubroken-spec" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-primary/20 rounded-md transition-all">
                <Github size={18} /> <span>GitHub</span>
              </Link>
              <Link href="https://x.com/iam_ninju" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-primary/20 rounded-md transition-all">
                <Twitter size={18} /> <span>Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
