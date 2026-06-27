import type { Metadata } from "next";
import { styles } from "../../components";
import { meta } from "../../data";

export const metadata: Metadata = {
  title: meta.en.privacy.title,
  description: meta.en.privacy.description,
  alternates: { canonical: "/privacy-policy/", languages: { en: "/privacy-policy/", sr: "/sr/politika-privatnosti/" } },
};

export default function PrivacyPolicyPage() {
  return (
      <main className="bg-black">
        <article className={`${styles.container} max-w-[820px] py-48 text-white`}>
          <h1 className={`${styles.uiText} mb-10 text-[clamp(44px,6vw,76px)] leading-none`}>privacy and cookie policy</h1>
          <p className="text-white/70">
            DALIBOR TRKULJA PR KOVAČKA RADIONICA INĐIJA takes the protection of personal data very seriously. The website trkulja.rs uses only the minimal data necessary to respond to your inquiries and ensure the basic functioning of the site.
          </p>
          <h2 className="mt-9 text-2xl font-bold">1. Data Collection and Use</h2>
          <p className="text-white/70">You can browse the website free of charge, anonymously, and without leaving any personal data.</p>
          <p className="text-white/70">
            When you send a question or a price inquiry, we request your name and e-mail address only. We use this data solely to respond to your inquiry and provide a quote for the custom piece you want.
          </p>
          <p className="text-white/70">
            The system may record anonymous technical data such as IP address, browser type, visit time, and opened pages for Google Analytics statistics. This data is not used for personal identification.
          </p>
          <h2 className="mt-9 text-2xl font-bold">2. Data Security</h2>
          <p className="text-white/70">The website is hosted on a secure HTTPS connection. We do not sell, rent, or share your name and e-mail address with anyone.</p>
          <h2 className="mt-9 text-2xl font-bold">3. Cookies</h2>
          <p className="text-white/70">
            Cookies are small text files placed on your device to ensure proper functionality and remember basic settings. Analytical cookies help us understand visits and viewed products. Functional cookies support technical stability.
          </p>
          <h2 className="mt-9 text-2xl font-bold">4. Your Rights and Data Deletion</h2>
          <p className="text-white/70">
            You may request access to or permanent deletion of the data we hold. Send requests to <a href="mailto:trkulja.dalibor@gmail.com">trkulja.dalibor@gmail.com</a> with the subject GDPR.
          </p>
          <h2 className="mt-9 text-2xl font-bold">5. Policy Changes</h2>
          <p className="text-white/70">Any potential changes will be published directly on this page.</p>
        </article>
      </main>
  );
}
