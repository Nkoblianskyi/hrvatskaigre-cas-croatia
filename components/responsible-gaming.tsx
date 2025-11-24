export function ResponsibleGaming() {
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
              Vaša Sigurnost Je Prioritet
            </span>
            <h2 className="font-serif text-5xl font-bold mb-6 text-white">Odgovorno Kockanje</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Sigurnost i Zaštita Igrača</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Online kockanje treba biti zabavna i uzbudljiva aktivnost, nikada obaveza ili način zarade. U Hrvatskoj
                djeluje strogi regulatorni okvir koji štiti igrače kroz licence Ministarstva financija i obavezne
                mehanizme odgovornog kockanja koje moraju implementirati svi licencirani operateri.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Svi casino operateri koje preporučujemo nude alate za postavljanje limita depozita, vremena igranja i
                gubitaka. Također omogućuju pauze od igranja i samoisključenje kroz nacionalni registar koji djeluje
                među svim licenciranim platformama u Hrvatskoj.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Prepoznavanje Znakova Problema</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Važno je prepoznati rane znakove problematičnog kockanja: igranje s novcem koji ne možete priuštiti
                izgubiti, pokušaji vraćanja izgubljenog novca, zanemarivanje obaveza ili odnosa zbog kockanja, ili
                posudivanje novca za kockanje. Ako primijetite bilo koji od ovih znakova, odmah potražite pomoć.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Moderne casino platforme koriste napredne algoritme za detekciju neobičnih obrazaca ponašanja koji mogu
                ukazivati na problem. Ovi sustavi automatski aktiviraju mjere zaštite kao što su obavezne pauze ili
                kontakt s korisničkom podrškom specijaliziranom za pomoć.
              </p>
            </div>

            <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Organizacije za Pomoć</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ako vi ili netko koga poznajete ima problem s kockanjem, dostupne su profesionalne organizacije koje
                nude besplatnu i povjerljivu pomoć:
              </p>
              <div className="space-y-5 mb-6 pl-4 border-l-4 border-amber-500">
                <div>
                  <a
                    href="https://www.gambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 text-xl font-bold hover:text-amber-600 transition-colors"
                  >
                    GambleAware
                  </a>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Vodeća organizacija za edukaciju, prevenciju i tretman ovisnosti o kockanju.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.gamcare.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 text-xl font-bold hover:text-amber-600 transition-colors"
                  >
                    GamCare
                  </a>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Besplatna podrška, savjetovanje i informacije za sve pogođene problemima s kockanjem.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.gamstop.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 text-xl font-bold hover:text-amber-600 transition-colors"
                  >
                    GamStop
                  </a>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Besplatni servis koji omogućuje samoisključenje iz svih online casino platformi.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ove organizacije pružaju stručno savjetovanje, terapijske programe i 24/7 telefonsku podršku. Ne
                oklijevajte potražiti pomoć — ovisnost o kockanju je rješiv problem s pravovremenom intervencijom i
                profesionalnom podrškom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
