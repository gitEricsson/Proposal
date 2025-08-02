"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const colors = ["#ec4899", "#8b5cf6", "#f59e0b", "#10b981", "#3b82f6", "#ef4444"]

export default function Confetti() {
  const [pieces, setPieces] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([])

  useEffect(() => {
    const newPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
    }))
    setPieces(newPieces)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: piece.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
