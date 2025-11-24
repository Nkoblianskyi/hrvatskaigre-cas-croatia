"use client"

import { useState, useEffect } from "react"
import { Shield, Award, CheckCircle2, BadgeCheck } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date()
      const months = [
        "siječanj",
        "veljača",
        "ožujak",
        "travanj",
        "svibanj",
        "lipanj",
        "srpanj",
        "kolovoz",
        "rujan",
        "listopad",
        "studeni",
        "prosinac",
      ]
      return `${months[now.getMonth()]} ${now.getFullYear()}`
    }
    setCurrentDate(getCurrentDate())
  }, [])

  return (
    <section className="relative bg-[#06070a] text-white py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/luxury-blackjack-table-with-cards-and-chips-dark-e.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06070a]/80 via-[#06070a]/60 to-[#06070a]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 border border-[#c9962d]/20 rounded-sm px-4 py-1 mb-8 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Ažurirano</span>
            <span className="w-px h-4 bg-[#c9962d]/30" />
            <span className="text-[10px] uppercase tracking-widest text-[#c9962d]">{currentDate}</span>
          </div>

          <h1 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold mb-5 leading-[1.1] tracking-tight">
            <span className="text-white">Premium Casino</span>
            <br />
            <span className="text-[#c9962d]">Vodič za Hrvatsku</span>
          </h1>

          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Stručne analize, objektivne recenzije i provjerene preporuke za najkvalitetnije casino iskustvo.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-[#c9962d]/10">
            <div className="flex flex-col items-center gap-2 p-4">
              <Image src="/flag.png" alt="shield" width={40} height={40} />
              <div className="text-sm font-medium text-white">Licencirano</div>
              <div className="text-xs text-gray-500">Službeno</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <BadgeCheck className="w-4 h-4 text-[#c9962d]" />
              <div className="text-sm font-medium text-white">18+</div>
              <div className="text-xs text-gray-500">Odgovorna Igra</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <Award className="w-4 h-4 text-[#c9962d]" />
              <div className="text-sm font-medium text-white">Bezpečna Gra</div>
              <div className="text-xs text-gray-500">Zaštićeno</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <CheckCircle2 className="w-4 h-4 text-[#c9962d]" />
              <div className="text-sm font-medium text-white">Provjereni</div>
              <div className="text-xs text-gray-500">Proizvodi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
