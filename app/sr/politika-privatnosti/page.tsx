import { ContactSection, SectionTitle, styles } from "../../components";
import { meta } from "../../data";
import { HomeScrollLayers } from "../../HomeScrollLayers";
import { createPageMetadata } from "../../metadata";

export const metadata = createPageMetadata({
  title: meta.sr.privacy.title,
  description: meta.sr.privacy.description,
  canonical: "/sr/politika-privatnosti/",
  languages: { en: "/privacy-policy/", sr: "/sr/politika-privatnosti/" },
  locale: "sr",
});

export default function SerbianPrivacyPolicyPage() {
  const locale = "sr";

  return (
    <main>
      <HomeScrollLayers />
      <section className="home-panel relative z-[1] grid min-h-dvh content-start bg-black px-8 pb-24 pt-40 md:pb-32 md:pt-48 max-md:px-5">
        <div className={styles.container}>
          <SectionTitle>politika privatnosti i kolačića</SectionTitle>
          <article className="mx-auto max-w-[770px] text-[15px] leading-relaxed text-white/70">
            <p className="mb-6">
              DALIBOR TRKULJA PR KOVAČKA RADIONICA INĐIJA ozbiljno pristupa zaštiti podataka o ličnosti. Internet stranica trkulja.rs (u daljem tekstu: web sajt) koristi samo minimalne podatke koji su neophodni da bismo odgovorili na Vaše upite i obezbedili osnovno funkcionisanje sajta.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">1. Prikupljanje i upotreba informacija</h2>
            <p className="mb-6">Web sajt možete pregledati potpuno besplatno, anonimno i bez ostavljanja bilo kakvih ličnih podataka.</p>
            <p className="mb-2 font-bold text-white">Podaci koje nam sami prosledite:</p>
            <p className="mb-6">
              <strong className="text-white">Upit za cenu i kontakt:</strong> Kada pošaljete pitanje ili upit za cenu, od Vas tražimo isključivo Ime i E-mail adresu. Ove podatke koristimo jedino da bismo Vam odgovorili na upit i formirali cenu za unikat koji želite. Podaci se čuvaju u našoj internoj bazi i nikada se ne dele sa trećim licima.
            </p>
            <p className="mb-2 font-bold text-white">Podaci koji se prikupljaju automatski (Statistika):</p>
            <p className="mb-6">
              Ako dozvolite analitičke kolačiće, Google Analytics beleži tehničke podatke o korišćenju, kao što su vrsta pregledača, vreme posete i otvorene stranice. Ove informacije nam pomažu da razumemo koje stranice su najposećenije i ne koristimo ih za Vašu ličnu identifikaciju. Google Analytics se ne učitava ako odbijete analitičke kolačiće.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">2. Sigurnost podataka</h2>
            <p className="mb-6">
              <strong className="text-white">Bezbedna veza:</strong> Kompletan sajt se nalazi na sigurnom SSL serveru (HTTPS šifrovana veza), što znači da je komunikacija između Vas i sajta potpuno zaštićena.
            </p>
            <p className="mb-6">
              <strong className="text-white">Nema deljenja podataka:</strong> Vaše ime i e-mail adresu ne prodajemo, ne iznajmljujemo i ne delimo ni sa kim, ni pod kojim uslovima.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">3. Kolačići (Cookies)</h2>
            <p className="mb-6">Kolačići su male tekstualne datoteke koje sajt postavlja na Vaš uređaj kako bi ispravno radio i pamtio osnovna podešavanja.</p>
            <p className="mb-2 font-bold text-white">Koje kolačiće koristimo?</p>
            <p className="mb-4">
              <strong className="text-white">Kolačići za analitiku (Google Analytics):</strong> Pomažu nam da vidimo koliko ljudi posećuje sajt i koje proizvode gledaju. Google-ova pravila privatnosti možete pogledati na njihovoj stranici:{" "}
              <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                Google Privacy & Terms
              </a>.
            </p>
            <p className="mb-6">
              <strong className="text-white">Funkcionalni kolačići:</strong> Služe isključivo za tehničku stabilnost i pravilan rad same internet stranice.
            </p>
            <p className="mb-2 font-bold text-white">Kako da isključite kolačiće?</p>
            <p className="mb-6">
              Opcione kolačiće možete prihvatiti, odbiti ili promeniti u bilo kom trenutku putem linka Podešavanja kolačića u podnožju sajta. Kolačiće možete i obrisati ili blokirati kroz podešavanja Vašeg internet pregledača (Chrome, Firefox, Safari, Edge). Detaljna uputstva za svaki pregledač možete pronaći na zvaničnom sajtu{" "}
              <a className="underline" href="https://www.aboutcookies.org/" target="_blank" rel="noopener">
                AboutCookies.org
              </a>.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">4. Vaša prava i brisanje podataka</h2>
            <p className="mb-6">
              U skladu sa zakonom, u svakom trenutku imate pravo da zatražite uvid u podatke koje imamo (Vaše ime i e-mail iz kontakt forme), kao i njihovo trajno brisanje.
            </p>
            <p className="mb-6">
              Zahtev za brisanje možete poslati direktno na e-mail:{" "}
              <a className="underline" href="mailto:trkulja.dalibor@gmail.com">
                trkulja.dalibor@gmail.com
              </a>{" "}
              sa naslovom GDPR.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">5. Izmene politike</h2>
            <p>Sve eventualne izmene biće objavljene direktno na ovoj stranici.</p>
          </article>
        </div>
      </section>
      <ContactSection locale={locale} className="home-panel z-[2]" />
    </main>
  );
}
