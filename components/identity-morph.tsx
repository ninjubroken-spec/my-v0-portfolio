"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const names = ["BROKEN", "HIMANSHU"]

export function IdentityMorph() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % names.length)
        setTimeout(() => {
          setIsGlitching(false)
        }, 200)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentName = names[currentIndex]

  return (
    <div className="relative inline-block">
      <div 
        className="absolute inset-0 blur-3xl opacity-60"
        style={{
          background: `radial-gradient(ellipse at center, #8B0000 0%, transparent 70%)`,
        }}
      />
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`
              font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider text-foreground
              ${isGlitching ? "animate-glitch" : ""}
            `}
            style={{
              textShadow: isGlitching 
                ? `0 0 20px #8B0000, 0 0 40px #8B0000`
                : `0 0 10px #8B0000`,
            }}
          >
            <span className="relative">{currentName}</span>
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  )
}

