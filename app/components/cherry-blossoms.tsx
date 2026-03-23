"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CherryBlossoms() {
  const [petals, setPetals] = useState<any[]>([])

  useEffect(() => {
    const newPetals = []
    for (let i = 0; i < 25; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
        size: 8 + Math.random() * 12,
        rotation: Math.random() * 360,
      })
    }
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.x}%`, top: -30 }}
          animate={{ 
            y: ["0vh", "110vh"],
            rotate: [petal.rotation, petal.rotation + 360]
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" fill="#8B0000" className="opacity-40">
            <path d="M12 2C12 2 8 6 8 10C8 12.5 10 14 12 14C14 14 16 12.5 16 10C16 6 12 2 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

