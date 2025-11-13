"use client"

import React, { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"

export default function AnimatedNumberCounter() {
  const [count, setCount] = useState(() =>(Math.random() * (75 - 70 + 1)) + 70)
  const [flashColor, setFlashColor] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 1 : -1
      setCount((prev) => {
        const newCount = Math.max(2, Math.min(prev + change))
        setFlashColor(change > 0 ? "up" : "down")
        return newCount
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (flashColor) {
      const timer = setTimeout(() => {
        setFlashColor(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [flashColor])

  return (
    <div
      className={`flex items-center gap-4 -ml-27 rounded-2xl transition-colors duration-300 ${
        flashColor === "up"
          ? "text-green-500"
          : flashColor === "down"
          ? "text-red-500"
          : ""
      }`}
    >
      <NumberFlow
        value={count}
        className="text-5xl w-14 text-center font-semibold"
        format={{ style: "percent" , maximumFractionDigits: 0 }}
      />
    </div>
  )
}