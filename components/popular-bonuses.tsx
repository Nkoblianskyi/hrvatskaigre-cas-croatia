"use client"

import { useState, useEffect } from "react"
import { CasinoCard } from "@/components/casino-card"
import type { Casino } from "@/lib/data"

interface PopularBonusesProps {
  casinos: Casino[]
}

export function PopularBonuses({ casinos }: PopularBonusesProps) {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    const randomCount = Math.floor(Math.random() * (200 - 50 + 1)) + 50
    setUserCount(randomCount)

    const interval = setInterval(
      () => {
        setUserCount((prev) => {
          const change = Math.floor(Math.random() * 9) - 3
          const newCount = prev + change
          return newCount < 30 ? 30 : newCount > 250 ? 250 : newCount
        })
      },
      Math.random() * 5000 + 5000,
    )

    return () => clearInterval(interval)
  }, [])

  const topCasino = casinos[0]

  return (
    <section className="relative py-24 border-t border-amber-200/50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/luxury-casino-roulette-table-with-poker-cards-and.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm font-semibold tracking-wide uppercase rounded-full mb-6">
              Ексклузивна Препорука
            </span>
            <h2 className="font-serif text-5xl font-bold mb-6 text-white">Top Casino Preporuka</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50 mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-5">
              Nakon temeljite analize i testiranja svih vodećih casino platformi na hrvatskom tržištu, izdvajamo vam
              našu glavnu preporuku ovog mjeseca. Ova platforma se istakla po svim ključnim kriterijima: sigurnost,
              kvaliteta igara, brzina isplata, bonus ponude i korisničkoj podršci.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Svaka preporuka temeljena je na stvarnim iskustvima našeg tima, analizi korisničkih povratnih informacija
              i kontinuiranom praćenju performansi. Platforma ispod pokazuje kontinuiranu izvrsnost i posvećenost
              vrhunskom iskustvu igranja za hrvatske igrače.
            </p>
          </div>

          <CasinoCard casino={topCasino} rank={1} featured={true} />
        </div>
      </div>
    </section>
  )
}
