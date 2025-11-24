export function AboutUs() {
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
              Ekskluzivno Za Vas
            </span>
            <h2 className="font-serif text-5xl font-bold mb-6 text-white">O Nama</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">
                Vaš Pouzdani Partner u Svijetu Online Casina
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                <strong className="text-gray-900">hrvatskaigre.com</strong> je vodeća platforma za recenzije i usporedbe
                online casino platformi u Hrvatskoj. Naš tim stručnjaka ima više od 12 godina iskustva u iGaming
                industriji i posvećen je pružanju transparentnih, objektivnih i detaljnih analiza najboljih casino
                platformi dostupnih hrvatskim igračima.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Naša misija je jednostavna — pomoći vam pronaći najbolje online casino platforme koje nude sigurno
                igranje, poštene uvjete, brze isplate i vrhunsku zabavu. Svaka recenzija prolazi kroz temeljit proces
                testiranja i verifikacije kako bismo osigurali da vam preporučujemo samo najbolje od najboljeg.
              </p>
            </div>

            <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Naš Proces Evaluacije</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Svaki casino koji recenziramo prolazi kroz rigoroznu evaluaciju koja uključuje provjeru licence i
                sigurnosti, testiranje kvalitete korisničke podrške, analizu bonusa i promocija, ispitivanje brzine
                isplata, te procjenu izbora igara i dobavljača softvera. Koristimo vlastiti sustav bodovanja koji
                sigurnost i fer uvjete stavlja na prvo mjesto.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Naše recenzije se redovito ažuriraju kako bismo pratili promjene na tržištu i osigurali da vam uvijek
                pružamo najnovije i najtočnije informacije. Kontinuirano pratimo industriju i prilagođavamo naše
                standarde kako bi odražavali najbolje prakse i očekivanja igrača.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-amber-100/50">
              <h3 className="font-serif text-3xl font-semibold text-amber-700 mb-6">Transparentnost i Povjerenje</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                Održavamo potpunu uredničku nezavisnost u svim našim recenzijama. Iako primamo partnersku naknadu od
                casino operatera koje preporučujemo, to nikada ne utječe na naše objektivne ocjene ili proces
                rangiranja. Sva partnerstva su jasno označena u skladu s hrvatskim zakonima o zaštiti potrošača.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Naša predanost odgovornom kockanju je nepopustljiva. Aktivno promičemo alate za samoisključenje,
                postavljanje limita i druge mjere zaštite igrača. Surađujemo s organizacijama za prevenciju ovisnosti i
                podržavamo inicijative za sigurnije kockanje u Hrvatskoj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
