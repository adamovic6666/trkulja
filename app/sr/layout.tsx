import { Header } from "../components";

export default function SerbianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Header locale="sr" />
      {children}
    </div>
  );
}
