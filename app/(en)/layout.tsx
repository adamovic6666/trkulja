import { Footer, Header } from "../components";

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Header locale="en" />
      {children}
      <Footer locale="en" />
    </div>
  );
}
