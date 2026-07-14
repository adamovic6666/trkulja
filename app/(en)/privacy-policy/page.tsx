import type { Metadata } from "next";
import { ContactSection, SectionTitle, styles } from "../../components";
import { meta } from "../../data";
import { HomeScrollLayers } from "../../HomeScrollLayers";

export const metadata: Metadata = {
  title: meta.en.privacy.title,
  description: meta.en.privacy.description,
  alternates: { canonical: "/privacy-policy/", languages: { en: "/privacy-policy/", sr: "/sr/politika-privatnosti/" } },
};

export default function PrivacyPolicyPage() {
  const locale = "en";

  return (
    <main>
      <HomeScrollLayers />
      <section className="home-panel relative z-[1] grid min-h-dvh content-start bg-black px-8 pb-24 pt-40 md:pb-32 md:pt-48 max-md:px-5">
        <div className={styles.container}>
          <SectionTitle>privacy and cookie policy</SectionTitle>
          <article className="mx-auto max-w-[770px] text-[15px] leading-relaxed text-white/70">
            <p className="mb-6">
              DALIBOR TRKULJA PR KOVAČKA RADIONICA INĐIJA takes the protection of personal data very seriously. The website trkulja.rs (hereinafter: the website) uses only the minimal data necessary to respond to your inquiries and ensure the basic functioning of the site.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">1. Data Collection and Use</h2>
            <p className="mb-6">You can browse the website completely free of charge, anonymously, and without leaving any personal data.</p>
            <p className="mb-2 font-bold text-white">Data you provide voluntarily:</p>
            <p className="mb-6">
              <strong className="text-white">Price Inquiry and Contact:</strong> When you send a question or a price inquiry, we exclusively request your Name and E-mail address. We use this data solely to respond to your inquiry and provide a price quote for the custom piece you desire. The data is stored in our internal database and is never shared with third parties.
            </p>
            <p className="mb-2 font-bold text-white">Data collected automatically (Statistics):</p>
            <p className="mb-6">
              When you visit the website, the system automatically records anonymous technical data (IP address, browser type, time of visit, and pages opened). This information is used exclusively for visitor statistics through the Google Analytics tool, helping us understand which pages are most visited. This data is not used for your personal identification.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">2. Data Security</h2>
            <p className="mb-6">
              <strong className="text-white">Secure Connection:</strong> The entire website is hosted on a secure SSL server (HTTPS encrypted connection), meaning that the communication between you and the website is fully protected.
            </p>
            <p className="mb-6">
              <strong className="text-white">No Data Sharing:</strong> We do not sell, rent, or share your name and e-mail address with anyone, under any circumstances.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">3. Cookies</h2>
            <p className="mb-6">Cookies are small text files placed on your device by the website to ensure proper functionality and remember basic settings.</p>
            <p className="mb-2 font-bold text-white">Which cookies do we use?</p>
            <p className="mb-4">
              <strong className="text-white">Analytical Cookies (Google Analytics):</strong> These help us see how many people visit the site and which products they view. You can review Google&apos;s privacy policy on their page:{" "}
              <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                Google Privacy & Terms
              </a>.
            </p>
            <p className="mb-6">
              <strong className="text-white">Functional Cookies:</strong> These serve exclusively for the technical stability and proper operation of the website itself.
            </p>
            <p className="mb-2 font-bold text-white">How to disable cookies?</p>
            <p className="mb-6">
              If you do not want cookies, you can delete or block them at any time through your internet browser settings (Chrome, Firefox, Safari, Edge). Detailed instructions for each browser can be found on the official website{" "}
              <a className="underline" href="https://www.aboutcookies.org/" target="_blank" rel="noopener">
                AboutCookies.org
              </a>.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">4. Your Rights and Data Deletion</h2>
            <p className="mb-6">
              In accordance with the law, you have the right at any time to request insight into the data we hold (your name and e-mail from the contact form), as well as its permanent deletion.
            </p>
            <p className="mb-6">
              You can send a deletion request directly to the e-mail:{" "}
              <a className="underline" href="mailto:trkulja.dalibor@gmail.com">
                trkulja.dalibor@gmail.com
              </a>{" "}
              with the subject line GDPR.
            </p>

            <h2 className="mb-3 mt-10 text-xl font-bold text-white">5. Policy Changes</h2>
            <p>Any potential changes will be published directly on this page.</p>
          </article>
        </div>
      </section>
      <ContactSection locale={locale} className="home-panel z-[2]" />
    </main>
  );
}
