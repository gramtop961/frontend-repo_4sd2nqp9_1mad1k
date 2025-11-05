import { Globe, MapPin, Calendar, Hotel, Car, Plane } from "lucide-react";

const items = [
  {
    title: "Paket Wisata Domestik",
    icon: MapPin,
    desc: "Eksplor berbagai destinasi terbaik di Indonesia dengan itinerary fleksibel dan pemandu berpengalaman.",
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Paket Wisata Internasional",
    icon: Globe,
    desc: "Liburan ke Jepang, Korea, Eropa, dan destinasi dunia lainnya dengan harga bersaing.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tiket Pesawat & Kereta",
    icon: Plane,
    desc: "Pemesanan tiket multi-maskapai dengan opsi refund/reschedule yang mudah.",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hotel & Akomodasi",
    icon: Hotel,
    desc: "Rekomendasi hotel terbaik sesuai budget dan preferensi Anda.",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e0bdde6651?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sewa Mobil & Transport",
    icon: Car,
    desc: "Sewa kendaraan dengan supir profesional untuk perjalanan yang aman dan nyaman.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Custom Itinerary",
    icon: Calendar,
    desc: "Rancang perjalanan sesuai gaya Anda – private trip, honeymoon, outing kantor, atau keluarga.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_10%_20%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Layanan Kami</h2>
          <p className="mt-3 text-slate-600">Semua yang Anda butuhkan untuk perjalanan tak terlupakan — dari perencanaan hingga pulang dengan senyuman.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="about" className="mt-16 grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900">Mengapa Memilih Kami?</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="text-sky-600">•</span> Konsultan perjalanan berpengalaman dengan jaringan global.</li>
              <li className="flex gap-3"><span className="text-sky-600">•</span> Harga transparan dan fleksibel sesuai kebutuhan Anda.</li>
              <li className="flex gap-3"><span className="text-sky-600">•</span> Dukungan 24/7 selama perjalanan.</li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800">Konsultasi Itinerary</a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
                alt="Tim kami"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div id="contact" className="mt-16 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white shadow-lg">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Siap berangkat?</h3>
              <p className="mt-1 text-sky-50">Hubungi kami untuk penawaran terbaik dan rencana perjalanan yang pas untuk Anda.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://wa.me/621234567890" target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-white/90 px-5 py-3 font-medium text-slate-900 hover:bg-white">
                Chat WhatsApp
              </a>
              <a href="mailto:hello@nusantaratours.id" className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border border-white/70 bg-transparent px-5 py-3 font-medium text-white hover:bg-white/10">
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
