export function SelectionCriteria() {
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
              Naš Profesionalni Pristup
            </span>
            <h2 className="font-serif text-5xl font-bold mb-6 text-white">Naši Kriteriji Evaluacije</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Sigurnost i Licenciranje</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Prvi i najvažniji korak u našoj evaluaciji je provjera licence i sigurnosti casino platforme.
                Analiziramo status licence izdane od strane Ministarstva financija Republike Hrvatske, provjeravamo
                javne registre za eventualne regulatorne probleme, te testiramo tehničku sigurnost kao što je SSL/TLS
                enkripcija i zaštita osobnih podataka.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Također provjeravamo implementaciju sustava za odgovorno kockanje, integraciju sa nacionalnim registrom
                samoisključenja, te poštuju li casino sve zakonske obveze vezane uz zaštitu igrača. Samo casini koji
                zadovoljavaju sve sigurnosne standarde ulaze u našu selekciju.
              </p>
            </div>

            <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Bonusi i Promotivne Ponude</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Ne gledamo samo na veličinu bonusa, već na cjelokupnu vrijednost ponude. Detaljno analiziramo uvjete za
                promet (wagering requirements), vremensko ograničenje za ispunjenje uvjeta, maksimalne limite isplate,
                te koje igre doprinose ispunjavanju uvjeta. Bonus koji izgleda atraktivno može imati skrivene uvjete
                koji ga čine gotovo nemogućim za realizaciju.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Preferiramo casine s transparentnim i fer uvjetima bonusa. Zahtjevi za promet između 30-40x smatraju se
                razumnima, dok bonuse s uvjetima preko 50x označavamo kao nepovoljne. Također gledamo na redovite
                promocije, VIP programe i posebne ponude za postojeće igrače.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">
                Metode Plaćanja i Brzina Isplata
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Testiramo sve dostupne metode plaćanja s posebnim fokusom na brzinu transakcija i eventualne naknade.
                Provjeravamo koliko brzo casino obrađuje zahtjeve za isplatu, jesu li potrebne dodatne verifikacije, te
                postoje li limiti na iznose povlačenja. Najbolji casini nude širok izbor metoda plaćanja prilagođenih
                hrvatskim igračima.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Posebnu pažnju obraćamo na prvi zahtjev za isplatu koji često zahtijeva KYC verifikaciju. Provjeravamo
                je li proces jasan, brz i jednostavan. Casini koji nude brze isplate (24-48 sati) i minimalne naknade
                dobivaju više bodova u našoj evaluaciji.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
