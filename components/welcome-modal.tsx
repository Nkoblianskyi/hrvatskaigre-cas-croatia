"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { casinos } from "@/lib/data"
import { linkifyText } from "@/lib/utils"

export function WelcomeModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => { {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  if (!showModal) return null

  const topCasino = casinos[0]

  const renderStars = (rating: number) => {
    const stars = []
    const normalizedRating = rating / 2

    for (let i = 1; i <= 5; i++) {
      const fillPercentage = Math.min(Math.max(normalizedRating - (i - 1), 0), 1) * 100

      stars.push(
        <div key={i} className="relative">
          <Star className="h-5 w-5 text-gray-200" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 text-[#c9962d] fill-[#c9962d]" />
          </div>
        </div>,
      )
    }
    return stars
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-3 md:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal()
        }
      }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[420px] md:max-w-xl relative overflow-hidden border border-[#c9962d]/20">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeModal()
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 z-50 bg-white/95 hover:bg-gray-100 rounded-full p-2 transition-all duration-300 backdrop-blur-sm border border-gray-200 shadow-sm"
          type="button"
          aria-label="Zatvori"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#c9962d] to-transparent" />

        <div className="p-6 md:p-8">
          <div className="text-center mb-6 border-b border-gray-100 pb-6">
            <div className="inline-block px-4 py-1.5 bg-[#c9962d]/5 rounded-full mb-3 border border-[#c9962d]/10">
              <span className="text-[#c9962d] text-xs font-semibold uppercase tracking-widest">Najbolja Preporuka</span>
            </div>
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">Vrhunski Izbor</h2>
            <p className="text-gray-500 text-sm">Ekskluzivno za hrvatske igrače</p>
          </div>

          <div className="text-center mb-6">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 mx-auto w-fit border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src={topCasino.logo || "/placeholder.svg?height=80&width=140&text=" + topCasino.name}
                alt={`${topCasino.name} logo`}
                width={180}
                height={100}
                className="object-contain w-[180px] h-auto md:w-[200px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">{renderStars(topCasino.rating)}</div>
              <div className="text-gray-900 font-bold text-2xl">{topCasino.rating.toFixed(1)}</div>
              <div className="text-gray-400 text-sm">/10</div>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-gray-600 text-sm font-medium">{topCasino.votes} recenzija</div>
          </div>

          <div className="text-center mb-6 bg-gradient-to-br from-[#c9962d]/5 via-white to-[#c9962d]/5 rounded-2xl p-6 border border-[#c9962d]/20">
            <div className="text-[#c9962d] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              Ekskluzivni Bonus
            </div>
            <div className="text-gray-900 font-bold leading-tight text-2xl mb-2">{topCasino.bonus}</div>
            <div className="text-gray-500 text-xs">Samo za nove igrače</div>
          </div>

          <div className="mb-4">
            <button
              onClick={(e) => {
                e.preventDefault()
                window.open(topCasino.url, "_blank", "noopener,noreferrer")
                closeModal()
              }}
              className="w-full bg-gradient-to-r from-[#c9962d] to-[#b8872a] hover:from-[#b8872a] hover:to-[#c9962d] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9962d]/20 hover:shadow-xl hover:shadow-[#c9962d]/30 hover:-translate-y-0.5 text-base uppercase tracking-wider"
            >
              Igraj Sada
            </button>
          </div>

          <div className="text-center pt-4 border-t border-gray-100">
            <div className="text-gray-400 text-[10px] md:text-xs leading-relaxed" onClick={(e) => e.stopPropagation()}>
              {linkifyText(topCasino.terms)}
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-transparent via-[#c9962d]/30 to-transparent" />
      </div>
    </div>
  )
}
