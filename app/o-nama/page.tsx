import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O Nama - hrvatskaigre.com",
  description:
    "Saznajte više o hrvatskaigre.com - vašem pouzdanom izvoru za objektivne recenzije online casina u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f1116] text-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#daa520] hover:text-[#ebbe41] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Povratak na početnu</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#daa520] to-[#ebbe41] bg-clip-text text-transparent">
              O Nama
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Vaš pouzdani vodič za najbolje casino iskustvo u Hrvatskoj
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Who We Are */}
            <section className="bg-[#0a0c10] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#daa520]" />
                <h2 className="text-2xl font-bold">Tko Smo Mi</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  hrvatskaigre.com je vodećaplatforma za recenzije i usporedbu online casino platformi u Hrvatskoj. Naš
                  tim stručnjaka s višegodišnjim iskustvom u iGaming industriji posvećen je pružanju najkvalitetnijih i
                  najobjektivnijih informacija o online casinima dostupnim hrvatskim igračima.
                </p>
                <p>
                  Osnovani smo s jasnom vizijom: pomoći igračima da pronađu najbolje, najsigurnije i najpouzdanije
                  casino platforme koje nude vrhunsko iskustvo igranja. U svijetu prepunom opcija, razumijemo koliko je
                  važno imati pouzdanog partnera koji će vam pomoći donijeti informiranu odluku.
                </p>
              </div>
            </section>

            {/* Our Mission */}
            <section className="bg-[#0a0c10] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold">Naša Misija</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naša misija je jednostavna: pružiti transparentne, detaljne i pouzdane recenzije online casina koji
                  djeluju na hrvatskom tržištu. Testiramo svaki casino prema strogim kriterijima koji uključuju:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#daa520] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Licenciranje i sigurnost:</strong> Provjeravamo valjanost svih
                      licenci i sigurnosnih certifikata
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#daa520] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Ponuda igara:</strong> Analiziramo kvalitetu, raznolikost i
                      poštenje igara
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#daa520] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Bonusi i promocije:</strong> Procjenjujemo uvjete i stvarnu
                      vrijednost ponuda
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#daa520] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Metode plaćanja:</strong> Testiramo brzinu i sigurnost svih
                      transakcija
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#daa520] rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      <strong className="text-white">Korisnička podrška:</strong> Provjeravamo dostupnost i kvalitetu
                      pomoći
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Work */}
            <section className="bg-[#0a0c10] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold">Kako Radimo</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Naš proces recenziranja je temeljit i nepristran. Svaki casino prolazi kroz detaljnu analizu koja
                  uključuje:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">1. Stvarno Testiranje</h3>
                    <p className="text-sm">Registracija, igran je i isplate sa stvarnim novcem</p>
                  </div>
                  <div className="bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">2. Detaljna Analiza</h3>
                    <p className="text-sm">Provjera svih aspekata casino platforme</p>
                  </div>
                  <div className="bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">3. Objektivno Ocjenjivanje</h3>
                    <p className="text-sm">Rangiranje prema našim profesionalnim kriterijima</p>
                  </div>
                  <div className="bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4">
                    <h3 className="font-bold text-white mb-2">4. Redovito Ažuriranje</h3>
                    <p className="text-sm">Kontinuirana provjera i ažuriranje recenzija</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Responsible Gaming */}
            <section className="bg-[#0a0c10] border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold">Odgovorno Kockanje</h2>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Snažno podržavamo odgovorno kockanje i vjerujemo da online casino igre trebaju biti zabava, nikada
                  problem. Preporučujemo samo casine koji nude alate za odgovorno igranje i surađujemo s organizacijama
                  koje pomažu osobama s problemima kockanja.
                </p>
                <div className="bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-6 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#daa520]">Važno:</strong> Svi recenzirani casini su namijenjeni osobama
                    starijim od 18 godina. Ako smatrate da imate problem s kockanjem, obratite se stručnjacima za pomoć.
                  </p>
                </div>
              </div>
            </section>

            {/* Transparency */}
            <section className="bg-[#0a0c10] border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Transparentnost</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Primamo partnersku naknadu od nekih casino operatera koje recenziramo kada igrači kliknu na naše
                  linkove i registriraju se. Međutim, ovo nikada ne utječe na naše recenzije ili ocjene. Naša reputacija
                  ovisi o pružanju istinitih i objektivnih informacija.
                </p>
                <p>
                  Sve naše recenzije temeljene su na stvarnim iskustvima i objektivnim kriterijima. Ako casino ne
                  zadovoljava naše visoke standarde, nećemo ga preporučiti, bez obzira na moguću proviziju.
                </p>
              </div>
            </section>
          </div>

          {/* Contact CTA */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
