"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#06070a]/95 backdrop-blur-md border-b border-[#c9962d]/20"
          : "bg-[#06070a] border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-24">
          <Link href="/" className="group transition-all duration-300" onClick={handleNavigation}>
            <div className="flex items-center gap-3">
              {/* Logo icon with golden gradient */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9962d] to-[#8b6914] flex items-center justify-center shadow-lg shadow-[#c9962d]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>

              {/* Site name with luxury typography */}
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight text-white group-hover:text-[#c9962d] transition-colors">
                  Hrvatska Igre
                </span>
                <span className="text-xs font-light tracking-[0.2em] text-[#c9962d] uppercase">
                  Premium Casino Review
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
