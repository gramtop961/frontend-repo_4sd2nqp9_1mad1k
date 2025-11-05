import { MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(56,189,248,0.25),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Paket Tur Terbaik 2025
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Jelajahi Keindahan Nusantara bersama Partner Perjalanan Terpercaya
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Kami menyediakan paket wisata domestik & internasional, tiket pesawat, hotel, dan penyewaan kendaraan dengan layanan profesional.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-white font-medium shadow hover:opacity-95 transition">
                Lihat Paket & Layanan
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-700 font-medium hover:border-sky-300 hover:text-sky-700 transition">
                Konsultasi Gratis
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <img src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjbGllbnR8ZW58MHwwfHx8MTc2MjMzNTQ3Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="client" className="h-8 w-8 rounded-full object-cover" />
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" alt="client" className="-ml-3 h-8 w-8 rounded-full object-cover ring-2 ring-white" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="client" className="-ml-3 h-8 w-8 rounded-full object-cover ring-2 ring-white" />
              </div>
              <span>10.000+ pelanggan puas</span>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop"
                alt="Pantai dan pegunungan Indonesia"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  Destinasi Populer: Bali • Labuan Bajo • Raja Ampat • Jepang
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
