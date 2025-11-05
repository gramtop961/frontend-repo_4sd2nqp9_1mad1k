import { Plane, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
              <Plane className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Nusantara Tours
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-sky-600 transition-colors">Layanan</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">Tentang</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Kontak</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:+621234567890" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-colors">
              <Phone className="h-4 w-4" />
              +62 123-4567-890
            </a>
            <a href="mailto:hello@nusantaratours.id" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition-opacity">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
