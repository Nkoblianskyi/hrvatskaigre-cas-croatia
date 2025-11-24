"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import type { Casino } from "@/lib/data"

interface CasinoCardProps {
  casino: Casino
  rank: number
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const [showFullTerms, setShowFullTerms] = useState(false)
  const isTop3 = rank <= 3

  const getPrimaryBadge = () => {
    if (rank === 1)
      return {
        text: "Najbolja preporuka",
        color: "bg-gradient-to-r from-[#c9962d] via-[#d4a435] to-[#c9962d] text-white shadow-lg shadow-[#c9962d]/20",
      }
    if (rank === 2)
      return {
        text: "Popularan",
        color: "bg-gradient-to-r from-[#c9962d] via-[#d4a435] to-[#c9962d] text-white shadow-lg shadow-[#c9962d]/20",
      }
    if (rank === 3)
      return {
        text: "U trendu",
        color: "bg-gradient-to-r from-[#c9962d] via-[#d4a435] to-[#c9962d] text-white shadow-lg shadow-[#c9962d]/20",
      }
    return null
  }

  const calculateStars = (rating: number) => {
    const starValue = rating / 2
    const roundedStars = Math.round(starValue * 5) / 5
    const fullStars = Math.floor(roundedStars)
    const partialFill = roundedStars - fullStars
    const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0)

    return { fullStars, partialFill, emptyStars }
  }

  const renderStars = (size: "sm" | "md") => {
    const starClass = size === "sm" ? "w-3 h-3" : "w-4 h-4"
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className={`${starClass} fill-[#daa520] text-[#daa520] stroke-[#daa520] stroke-[1.5px]`}
        />,
      )
    }

    if (partialFill > 0) {
      const fillPercentage = partialFill * 100
      stars.push(
        <div key="partial" className={`relative ${starClass}`}>
          <Star className={`absolute ${starClass} text-transparent stroke-[#daa520] stroke-[1.5px]`} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className={`${starClass} fill-[#daa520] text-[#daa520] stroke-[#daa520] stroke-[1.5px]`} />
          </div>
        </div>,
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className={`${starClass} text-transparent stroke-[#daa520] stroke-[1.5px]`} />,
      )
    }

    return stars
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-serif font-semibold text-[#c9962d]">{rating.toFixed(1)}</span>
        <span className="text-sm text-gray-500">/10</span>
      </div>
    )
  }

  const { fullStars, partialFill, emptyStars } = calculateStars(casino.rating)

  const primaryBadge = getPrimaryBadge()

  return (
    <div className="relative">
      {primaryBadge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div
            className={`${primaryBadge.color} px-6 py-2 text-sm font-semibold tracking-wide rounded-full border-2 border-white`}
          >
            {primaryBadge.text}
          </div>
        </div>
      )}

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`block relative rounded-lg p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
          isTop3
            ? "bg-white border-2 border-[#c9962d] shadow-lg shadow-[#c9962d]/10 hover:shadow-xl hover:shadow-[#c9962d]/20"
            : "bg-white border border-gray-200 hover:border-[#c9962d]/50 shadow-md hover:shadow-lg"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[60px_1fr_auto_auto] md:gap-4 lg:gap-6 md:items-center pt-2">
          <div className="text-center flex-shrink-0">
            <div
              className={`text-3xl lg:text-4xl font-serif font-semibold ${isTop3 ? "text-[#c9962d]" : "text-gray-400"}`}
            >
              {rank}
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 min-w-0">
            <div className="bg-gray-50 p-3 lg:p-4 rounded border border-gray-200 flex-shrink-0">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={140}
                height={70}
                className="w-28 lg:w-36 h-14 lg:h-18 object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-shrink-0">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Bonus</div>
              <div className="text-base lg:text-lg font-semibold text-gray-900 text-center leading-tight">
                {casino.bonus}
              </div>
            </div>
          </div>

          <div className="text-center px-4 lg:px-6 flex-shrink-0">
            {renderRating(casino.rating)}
            <div className="flex items-center gap-1 justify-center mt-1">{renderStars("sm")}</div>
            <div className="text-xs text-gray-500 mt-1">{casino.votes} glasova</div>
          </div>

          <div className="flex-shrink-0">
            <div className="btn-primary whitespace-nowrap text-sm lg:text-base px-4 lg:px-6">Posjeti</div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="bg-gray-50 p-3 rounded border border-gray-200 flex-shrink-0">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={160}
                height={80}
                className="w-28 h-24 object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Bonus</div>
              <div className="text-lg font-semibold text-gray-900 text-center leading-tight">{casino.bonus}</div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-serif font-semibold text-[#c9962d]">{casino.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-500">/10</span>
              </div>
              <div className="flex items-center gap-0.5">{renderStars("sm")}</div>
              <div className="text-xs text-gray-500">({casino.votes})</div>
            </div>
            <div className="btn-primary text-[10px] px-2.5 py-1.5 flex-shrink-0 leading-tight">Posjeti</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center truncate">18+ | Uvjeti vrijede | T&C</p>
        </div>
      </a>
    </div>
  )
}
