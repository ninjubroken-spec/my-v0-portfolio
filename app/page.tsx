import { IdentityMorph } from "@/app/components/identity-morph"
import { CherryBlossoms } from "@/app/components/cherry-blossoms"
import { ScrambleText } from "@/app/components/scramble-text"
import { Github, Twitter } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-900/50 overflow-x-hidden">
      <CherryBlossoms />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.jpg"
            alt="Banner"
            fill
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 space-y-6">
          <IdentityMorph />
          <p className="text-zinc-400 max-w-lg mx-auto text-lg md:text-xl font-light tracking-widest uppercase">
            <ScrambleText>Community Creative & Blockchain Enthusiast</ScrambleText>
          </p>
          
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/ninjubroken-spec" target="_blank" className="hover:text-red-600 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Creative Works */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-20">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter italic border-b border-red-900 pb-4 inline-block mx-auto w-full">
          CHRONICLES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-4 hover:border-red-900 transition-all">
            <div className="relative h-80 w-full mb-6">
              <Image src="/images/hemi-tshirt.jpg" alt="Winning Design" fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">Hemi T-Shirt Winner</h3>
            <p className="text-zinc-400 mb-4 font-light">Award-winning design for Hemi Network.</p>
          </div>

          <div className="group relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-4 hover:border-red-900 transition-all">
            <div className="relative h-80 w-full mb-6">
              <Image src="/images/logo-1.jpg" alt="Logo Design" fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">Visual Identity</h3>
            <p className="text-zinc-400 mb-4 font-light">Custom branding for blockchain projects.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-zinc-900 opacity-50">
        <p className="text-sm tracking-widest uppercase">© 2026 BROKEN // NINJU</p>
      </footer>
    </main>
  )
}
