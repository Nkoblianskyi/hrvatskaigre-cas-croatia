"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const handleNavigation = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#05070a] text-gray-400 border-t border-[#c9962d]/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
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
            <p className="text-sm leading-relaxed mb-8">
              Vaš pouzdani partner za navigaciju kroz svijet online casino platformi u Hrvatskoj.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#c9962d] text-[#06070a] px-6 py-3 rounded-sm font-semibold">
              <span className="text-2xl">18+</span>
              <span className="text-xs">Samo odrasli</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white mb-6">Informacije</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/o-nama"
                  className="text-sm hover:text-[#c9962d] transition-colors"
                  onClick={handleNavigation}
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-kolacica"
                  className="text-sm hover:text-[#c9962d] transition-colors"
                  onClick={handleNavigation}
                >
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-sm hover:text-[#c9962d] transition-colors"
                  onClick={handleNavigation}
                >
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white mb-6">Pravne Napomene</h3>
            <p className="text-sm leading-relaxed">
              Preporučujemo samo licencirane casino platforme. Primamo partnersku naknadu, ali naše recenzije ostaju
              neovisne.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <h3 className="text-sm uppercase tracking-widest text-white mb-8 text-center">Odgovorno Kockanje</h3>
 <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 items-center justify-center mb-6">
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
                        <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamble-aware.webp"
                alt="GambleAware"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
                        <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] backdrop-blur-sm p-3 rounded-lg hover:bg-[#1a1a1a]/80 transition-all duration-300 flex items-center justify-center border border-[#d4af37]/20 hover:border-[#d4af37]/40 group"
            >
              <Image
                src="/pbsvi.svg"
                alt="PBSVI"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <p className="text-xs text-center leading-relaxed max-w-2xl mx-auto">
            Kockanje može dovesti do ovisnosti. Igrajte odgovorno i tražite pomoć ako primijetite znakove problema.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 bg-[#040507]">
        <div className="container mx-auto px-6 py-6">
          <p className="text-xs text-center text-gray-600">&copy; {new Date().getFullYear()} hrvatskaigre.com</p>
        </div>
      </div>
    </footer>
  )
}
