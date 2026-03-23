"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const chars = "!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function ScrambleText({ children, className = "", duration = 1.5, delay = 0 }: any) {
  const [displayText, setDisplayText] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(children.split("").map((char: string, index: number) => {
        if (char === " ") return " "
        if (index < iteration) return children[index]
        return chars[Math.floor(Math.random() * chars.length)]
      }).join(""))
      iteration += children.length / 10
      if (iteration >= children.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [isInView, children])

  return <motion.span ref={ref} className={className}>{displayText || children}</motion.span>
}

