import type { Metadata } from "next";
import { styles } from "../../components";
import { meta } from "../../data";

export const metadata: Metadata = {
  title: meta.sr.privacy.title,
  description: meta.sr.privacy.description,
  alternates: { canonical: "/sr/politika-privatnosti/", languages: { en: "/privacy-policy/", sr: "/sr/politika-privatnosti/" } },
};

export default function SerbianPrivacyPolicyPage() {
  return (
      <main className="bg-black">
        <article className={`${styles.container} max-w-[820px] py-48 text-white`}>
          <h1 className={`${styles.uiText} mb-10 text-[clamp(44px,6vw,76px)] leading-none`}>politika privatnosti i kolačića</h1>
          <p className="text-white/70">
            DALIBOR TRKULJA PR KOVAČKA RADIONICA INĐIJA ozbiljno pristupa zaštiti podataka o ličnosti. Internet stranica trkulja.rs koristi samo minimalne podatke koji su neophodni da bismo odgovorili na Vaše upite i obezbedili osnovno funkcionisanje sajta.
          </p>
          <h2 className="mt-9 text-2xl font-bold">1. Prikupljanje i upotreba informacija</h2>
          <p className="text-white/70">Web sajt možete pregledati potpuno besplatno, anonimno i bez ostavljanja bilo kakvih ličnih podataka.</p>
          <p className="text-white/70">
            Kada pošaljete pitanje ili upit za cenu, tražimo isključivo ime i e-mail adresu. Ove podatke koristimo jedino da bismo Vam odgovorili na upit i formirali cenu za unikat koji želite.
          </p>
          <p className="text-white/70">
            Sistem može automatski beležiti anonimne tehničke podatke kao što su IP adresa, vrsta pregledača, vreme posete i otvorene stranice za statistiku kroz Google Analytics. Ovi podaci ne služe za Vašu ličnu identifikaciju.
          </p>
          <h2 className="mt-9 text-2xl font-bold">2. Sigurnost podataka</h2>
          <p className="text-white/70">Kompletan sajt je na sigurnoj HTTPS vezi. Vaše ime i e-mail adresu ne prodajemo, ne iznajmljujemo i ne delimo ni sa kim.</p>
          <h2 className="mt-9 text-2xl font-bold">3. Kolačići</h2>
          <p className="text-white/70">
            Kolačići su male tekstualne datoteke koje sajt postavlja na Vaš uređaj kako bi ispravno radio i pamtio osnovna podešavanja. Analitički kolačići pomažu nam da pratimo posećenost, a funkcionalni služe za stabilan rad sajta.
          </p>
          <h2 className="mt-9 text-2xl font-bold">4. Vaša prava i brisanje podataka</h2>
          <p className="text-white/70">
            U svakom trenutku možete zatražiti uvid u podatke koje imamo, kao i njihovo trajno brisanje. Zahtev pošaljite na <a href="mailto:trkulja.dalibor@gmail.com">trkulja.dalibor@gmail.com</a> sa naslovom GDPR.
          </p>
          <h2 className="mt-9 text-2xl font-bold">5. Izmene politike</h2>
          <p className="text-white/70">Sve eventualne izmene biće objavljene direktno na ovoj stranici.</p>
        </article>
      </main>
  );
}
