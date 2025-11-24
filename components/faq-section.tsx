"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Koji online casini su legalni u Hrvatskoj?",
    answer:
      "U Hrvatskoj su legalni samo online casini koji posjeduju važeću licencu izdanu od strane Ministarstva financija Republike Hrvatske. Svi licencirani operateri moraju se pridržavati strogih pravila uključujući 256-bitnu SSL enkripciju, integraciju sa sustavom samoisključenja, transparentne uvjete bonusa i plaćanje 15% poreza na bruto prihod. Prije registracije uvijek provjerite da li casino ima važeću hrvatsku licencu.",
  },
  {
    question: "Kako mogu provjeriti da li je casino siguran?",
    answer:
      "Sigurnost casina možete provjeriti tako što ćete potvrditi da casino posjeduje važeću licencu na web stranici Ministarstva financija, provjeriti SSL enkripciju (zeleni lokot u browseru), pročitati recenzije drugih igrača, testirati kvalitetu korisničke podrške i pregledati uvjete bonusa i isplata. Svi casini koje preporučujemo na hrvatskaigre.com prošli su temeljitu provjeru sigurnosti.",
  },
  {
    question: "Što su razumni uvjeti za bonus?",
    answer:
      "Razumni uvjeti za bonus uključuju zahtjeve za promet između 30-40x iznosa bonusa, vremensko ograničenje od minimalno 30 dana za ispunjenje uvjeta, jasno navedene igre koje doprinose promet i maksimalni iznos koji možete uplatiti. Izbjegavajte bonuse s uvjetima preko 50x ili skrivenim ograničenjima. Uvijek pročitajte potpune uvjete prije aktivacije bonusa.",
  },
  {
    question: "Koliko brzo mogu podići dobitke?",
    answer:
      "Brzina isplate ovisi o metodi plaćanja i casinoutornim postupcima verifikacije. E-novčanici poput Skrilla i Netellera obično nude najbrže isplate (24-48 sati), bankovni transferi mogu trajati 3-5 radnih dana, dok kreditne kartice obično zahtijevaju 3-5 radnih dana. Prvi put kod povlačenja bit će potrebna verifikacija identiteta što može produžiti proces za 24-48 sati.",
  },
  {
    question: "Moraju li hrvatski igrači platiti porez na casino dobitke?",
    answer:
      "Ne, hrvatski igrači ne plaćaju porez na dobitke ostvarene na licenciranim online casino platformama koje djeluju pod hrvatskom jurisdikcijom. Porez se naplaćuje direktno od casino operatera kroz 15% poreza na bruto prihod. Ovo znači da su svi vaši dobici potpuno vaši bez dodatnih poreznih obveza, pod uvjetom da igrate na legalno licenciranim platformama.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              Najčešća Pitanja
            </span>
            <h2 className="font-serif text-5xl font-bold mb-6 text-white">Često Postavljana Pitanja</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50 mb-10">
            <p className="text-gray-700 leading-relaxed text-lg">
              Sljedeća sekcija obrađuje najčešća pitanja vezana uz hrvatsko online casino tržište, regulatorne aspekte i
              zaštitu igrača. Odgovori su temeljeni na važećem zakonodavstvu i industrijskim standardima.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-amber-100/50 hover:shadow-lg transition-shadow"
              >
                <button
                  className="w-full flex justify-between items-start p-6 hover:bg-amber-50/50 transition-colors text-left group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-serif font-semibold text-gray-900 text-xl pr-8 leading-relaxed group-hover:text-amber-700 transition-colors">
                    {item.question}
                  </span>
                  <span className="text-3xl text-amber-600 group-hover:text-amber-700 transition-colors flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="bg-gradient-to-br from-amber-50/30 to-white px-6 py-6 border-t border-amber-100/50">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
