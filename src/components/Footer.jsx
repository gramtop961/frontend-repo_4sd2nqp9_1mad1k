import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Nusantara Tours</h4>
            <p className="mt-2 text-sm text-slate-600">
              Partner perjalanan Anda untuk menjelajah Indonesia dan dunia dengan nyaman, aman, dan menyenangkan.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Kontak</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-sky-600" /> Jl. Sudirman No. 123, Jakarta</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-600" /> +62 123-4567-890</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-600" /> hello@nusantaratours.id</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Jam Operasional</h5>
            <p className="mt-3 text-sm text-slate-700">Senin - Sabtu, 09.00 - 18.00 WIB</p>
            <p className="text-sm text-slate-500">Melayani 24/7 untuk bantuan darurat pelanggan.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Nusantara Tours. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-sky-600">Layanan</a>
            <a href="#about" className="hover:text-sky-600">Tentang</a>
            <a href="#contact" className="hover:text-sky-600">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
