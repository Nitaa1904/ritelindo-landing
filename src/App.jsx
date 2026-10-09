import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Truck,
  Wrench,
  Ruler,
  Factory,
  Store,
  Layers,
  ChevronDown,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
  Box,
  Compass,
  X,
  Menu,
  Calculator,
  Send,
  HelpCircle,
  Award,
} from "lucide-react";

const WA_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp resmi Ritelindo
const DEFAULT_WA_MSG = encodeURIComponent(
  "Halo Tim Ritelindo, saya ingin konsultasi promo Free Layout 3D & Paket Rak Toko.",
);

const PRODUCTS_DATA = [
  {
    id: "kelontong",
    badge: "Paling Laris Toko Daerah",
    title: "Paket Kelontong Modern",
    sub: "Cocok untuk upgrade toko kelontong konvensional ke minimarket modern",
    estArea: "3x6m - 4x8m",
    features: [
      "1x Rak Wall (Dinding) Utama 180cm",
      "2x Rak Double (Tengah) Island",
      "1x Meja Kasir Minimalis HPL",
      "Bonus Software Kasir Trial 30 Hari",
    ],
    priceTag: "Mulai Rp 8.500.000",
    waMsg:
      "Halo Ritelindo, saya tertarik info Paket Kelontong Modern (Free Layout 3D).",
  },
  {
    id: "minimarket",
    badge: "Standard Supermarket",
    title: "Paket Minimarket Standard",
    sub: "Solusi toko modern siap tanding dengan Minimarket Berjejaring",
    estArea: "6x12m - 8x15m",
    features: [
      "Set Complete Rak Wall Light & Medium Duty",
      "Set Complete Island Double Rack + Endcap",
      "Meja Kasir Premium Shelter & Promo Display",
      "Free Layout Design 3D High Quality",
    ],
    priceTag: "Mulai Rp 18.200.000",
    waMsg:
      "Halo Ritelindo, minta estimasi penawaran Paket Minimarket Standard.",
  },
  {
    id: "proyek",
    badge: "Custom & Heavy Duty",
    title: "Custom Proyek Retail & Gudang",
    sub: "Untuk Supermarket, Toko Bangunan, Apotek, Petshop & Rak Gudang Heavy",
    estArea: "Skala Besar / Multi Floor",
    features: [
      "Custom Ukuran, Ketebalan Ambalan & Warna Accent",
      "Kapasitas Beban hingga 150kg+ per ambalan",
      "Jasa Desain Interior Retail & Lighting Layout",
      "Pendampingan Instalasi Full Team Pabrik",
    ],
    priceTag: "Harga Penawaran Pabrik",
    waMsg:
      "Halo Ritelindo, saya butuh penawaran Custom Proyek Retail / Rak Gudang.",
  },
];

const VALUES_DATA = [
  {
    icon: Compass,
    title: "Free Konsultasi & Layout 3D",
    desc: "Tim arsitek retail kami siap membuatkan simulasi denah tata letak 3D presisi sesuai ukuran ruangan Anda GRATIS!",
  },
  {
    icon: Truck,
    title: "Free Ongkir Jawa - Bali",
    desc: "Layanan pengiriman aman dan bergaransi bebas biaya pengiriman untuk area seluruh Jawa dan Bali.",
  },
  {
    icon: Wrench,
    title: "Free Perakitan Langsung",
    desc: "Tim teknisi profesional pabrik turun langsung merakit rak di lokasi Anda khusus wilayah Jatim, Jateng & DIY.",
  },
  {
    icon: Ruler,
    title: "Custom Ukuran & Presisi",
    desc: "Bisa dipesan custom menyesuaikan sudut ruangan, tinggi ceiling, serta warna identitas brand toko Anda.",
  },
  {
    icon: Factory,
    title: "Langsung dari Pabrik",
    desc: "Dapatkan harga tangan pertama tanpa perantara. Material besi/steel berkualitasi tinggi dengan finishing powder coating.",
  },
  {
    icon: Store,
    title: "Jasa Interior Modern",
    desc: "Bukan sekadar rak, kami melayani konsep fasad depan, lighting, papan signage, hingga meja kasir custom stylish.",
  },
];

const STEPS_DATA = [
  {
    step: "01",
    title: "Konsultasi & Ukur Ruang",
    desc: "Kirimkan ukuran denah/sketsa kasar ruangan Anda via WhatsApp atau tim kami lakukan survei lokasi.",
  },
  {
    step: "02",
    title: "Pembuatan Layout 3D Gratis",
    desc: "Tim desainer Ritelindo menggambar tata letak rak 3D agar Anda bisa memvisualisasikan jumlah rak & kapasitas display.",
  },
  {
    step: "03",
    title: "Estimasi RAB & Produksi",
    desc: "Kami kirimkan rincian biaya transparan dari pabrik. Setelah persetujuan, produksi dikerjakan dengan standar QC ketat.",
  },
  {
    step: "04",
    title: "Pengiriman & Perakitan",
    desc: "Barang dikirim dengan armada khusus dan dirakit langsung oleh teknisi berpengalaman di toko Anda.",
  },
];

const PORTFOLIO_DATA = [
  {
    title: 'Toko Kelontong Modern "Bumi Makmur"',
    location: "Sidoarjo, Jawa Timur",
    type: "Paket Minimarket 6x10m",
    img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Apotek & Modern Healthcare",
    location: "Yogyakarta",
    type: "Custom Rak Apotek & LED Showcase",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Gudang Distributor Modern",
    location: "Semarang, Jawa Tengah",
    type: "Rak Gudang Medium Duty 500kg",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Supermarket Super Fresh",
    location: "Denpasar, Bali",
    type: "Full Supermarket Interior & Gondola",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
  },
];

const TESTIMONIALS_DATA = [
  {
    name: "H. Suryanto",
    store: "Owner Toko Surya Mart (Kediri)",
    text: "Awalnya ragu beli rak online. Tapi setelah diproposalkan desain 3D gratisnya, persis banget sama ruang saya. Pas terpasang kelihatannya rapi dan megah seperti minimarket waralaba besar!",
    rating: 5,
  },
  {
    name: "Ibu Ratna Pertiwi",
    store: "Apotek Sehat Gemilang (Solo)",
    text: "Pelayanan cepat & harga murah karena langsung dari pabrik Ritelindo. Tim rakitnya ramah dan rapi. Poin plusnya dapet free ongkir ke Solo.",
    rating: 5,
  },
  {
    name: "Pak Hendra Gunawan",
    store: "Ritel Mart Bali (Denpasar)",
    text: "Kualitas cat powder coating-nya tebal dan presisi. Rak diisi sembako berat tidak melengkung sama sekali. Sukses terus buat Ritelindo Group!",
    rating: 5,
  },
];

const FAQ_DATA = [
  {
    q: "Bagaimana cara mendapatkan fasilitas Free Layout 3D?",
    a: "Cukup klik tombol WhatsApp, lalu kirimkan ukuran panjang x lebar ruangan toko Anda (bisa berupa sketsa cakar ayam di kertas). Tim desainer kami akan menggambar layout 3D secara GRATIS tanpa dipungut biaya!",
  },
  {
    q: "Apakah Ritelindo bisa membuat ukuran custom?",
    a: "Sangat bisa! Karena kami adalah produsen langsung (pabrik), kami bisa menyesuaikan tinggi rak (misal 120cm, 150cm, 180cm, 200cm, dst), lebar ambalan, hingga pilihan warna kustom sesuai brand toko Anda.",
  },
  {
    q: "Berapa lama estimasi proses pengerjaan dan pengiriman?",
    a: "Untuk item ready stock paket standard, pengiriman dilakukan 1-3 hari kerja. Untuk pemesanan custom pabrikasi butuh waktu sekitar 7-14 hari kerja tergantung kuantitas proyek.",
  },
  {
    q: "Apakah ada minimal pembelian?",
    a: "Tidak ada! Kami melayani pembelian eceran/satuan (misal hanya butuh 1 unit rak sambung/wall), paket setup toko baru, hingga lelang tender proyek skala besar.",
  },
  {
    q: "Bagaimana sistem pembayaran dan jaminan keamanan transaksi?",
    a: "Transaksi resmi menggunakan rekening perusahaan PT / Ritelindo Group. Kami juga menyediakan opsi pembayaran bertahap (DP & Pelunasan saat barang siap kirim) untuk rasa aman Anda.",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialMsg, setModalInitialMsg] = useState("");

  // Quick Calculator State
  const [calcLength, setCalcLength] = useState(10);
  const [calcWidth, setCalcWidth] = useState(6);
  const [calcType, setCalcType] = useState("minimarket");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    businessType: "Minimarket / Kelontong",
    message: "",
  });

  const handleOpenModal = (presetMsg = "") => {
    setModalInitialMsg(presetMsg);
    setFormData((prev) => ({
      ...prev,
      message:
        presetMsg ||
        "Saya ingin konsultasi promo Free Layout 3D dan Katalog Rak Toko.",
    }));
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `Halo Tim Ritelindo,\n\nNama: ${formData.name}\nKota: ${formData.city}\nJenis Usaha: ${formData.businessType}\nNomor WA: ${formData.phone}\n\nPesan:\n${formData.message}`;
    const targetUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
    window.open(targetUrl, "_blank");
    setIsModalOpen(false);
  };

  const calculateEstimate = () => {
    const area = calcLength * calcWidth;
    let approxCost = 0;
    let approxWallRacks = Math.ceil((calcLength * 2 + calcWidth) / 0.9);
    let approxIslandRacks = Math.floor(calcLength / 3) * 3;

    if (calcType === "kelontong") {
      approxCost = area * 350000;
    } else if (calcType === "minimarket") {
      approxCost = area * 450000;
    } else {
      approxCost = area * 600000;
    }

    return {
      area,
      approxWallRacks,
      approxIslandRacks,
      approxCostFormatted: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(approxCost),
    };
  };

  const calcResult = calculateEstimate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-red-500 selection:text-white">
      {}
      {/* In Next.js/HTML, these head tags ensure full SEO compliance */}
      <head>
        <title>
          Ritelindo Group | Pabrik Rak Minimarket & Perlengkapan Toko Modern
        </title>
        <meta
          name="description"
          content="Produsen & Supplier B2B Rak Minimarket, Rak Gudang, & Perlengkapan Toko Modern. Free Konsultasi & Layout 3D, Free Ongkir Jawa-Bali, Harga Tangan Pertama dari Pabrik."
        />
        <meta
          name="keywords"
          content="rak minimarket, rak toko, pabrik rak minimarket, rak gondola, rak kelontong, jasa interior toko, rak gudang, ritelindo group"
        />
        <meta
          property="og:title"
          content="Ritelindo Group - Free Layout 3D & Supplier Rak Toko Modern Direct Pabrik"
        />
        <meta
          property="og:description"
          content="Solusi lengkap pembuatan toko modern, minimarket, apotek & gudang. Dapatkan promo Free Ongkir Jawa-Bali & Free Perakitan!"
        />
        <meta property="og:type" content="website" />
      </head>

      {}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs md:text-sm py-2 px-4 text-center font-medium shadow-inner flex justify-center items-center gap-2">
        <span className="bg-yellow-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse">
          PROMO TERTERAS
        </span>
        <span>
          🎉 Dapatkan <strong>FREE Layout 3D Desain Toko</strong> + Free Ongkir
          Se-Jawa & Bali Hari Ini!
        </span>
      </div>

      {}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center font-black text-2xl text-white shadow-md shadow-red-900/50 border border-red-500/30">
                R
              </div>
              <div>
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent block">
                  RITELINDO <span className="text-red-500">GROUP</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium block -mt-1">
                  Pabrik Rak & Interior Toko
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
              <a
                href="#keunggulan"
                className="hover:text-red-400 transition-colors"
              >
                Keunggulan
              </a>
              <a
                href="#katalog"
                className="hover:text-red-400 transition-colors"
              >
                Paket Toko
              </a>
              <a
                href="#layout3d"
                className="hover:text-red-400 transition-colors"
              >
                Layanan 3D
              </a>
              <a
                href="#kalkulator"
                className="hover:text-red-400 transition-colors"
              >
                Kalkulator Rak
              </a>
              <a
                href="#portfolio"
                className="hover:text-red-400 transition-colors"
              >
                Portofolio
              </a>
              <a href="#faq" className="hover:text-red-400 transition-colors">
                FAQ
              </a>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() =>
                  handleOpenModal(
                    "Halo Ritelindo, saya ingin Konsultasi Gratis & Layout 3D Toko.",
                  )
                }
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow-lg shadow-emerald-900/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WA</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 font-medium text-sm">
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              Keunggulan
            </a>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              Paket Toko
            </a>
            <a
              href="#layout3d"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              Layanan 3D Layout
            </a>
            <a
              href="#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              Kalkulator Rak
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              Portofolio
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-red-400"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenModal();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hubungi via WhatsApp</span>
            </button>
          </div>
        )}
      </header>

      {}
      <section className="relative bg-slate-950 text-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Background Decorative Gradients & Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left Column: B2B High-Converting Value Headlines */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-red-400 shadow-inner">
                <Factory className="w-4 h-4 text-red-500" />
                <span>Pabrik Produsen Rak Minimarket & Gudang No. 1</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Buka Toko Modern{" "}
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Lebih Hemat & Classy
                </span>{" "}
                Langsung Pabrik!
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Solusi lengkap suplai Rak Minimarket, Rak Gudang, & Meja Kasir.
                Dapatkan fasilitas{" "}
                <strong className="text-white">
                  FREE Layout Desain 3D Presisi
                </strong>
                , <strong className="text-white">Free Ongkir Jawa-Bali</strong>,
                serta perakitan langsung di lokasi Anda!
              </p>

              {/* Key Highlights Bullet */}
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-2 font-medium">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Harga Tangan Pertama Pabrik</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bisa Custom Sesuai Ukuran</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Perakitan Jatim, Jateng, DIY</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kapasitas Beban Tebal & Kokoh</span>
                </div>
              </div>

              {/* Hero CTA Button Container */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button
                  onClick={() =>
                    handleOpenModal(
                      "Halo Tim Ritelindo, saya minta klaim Promo FREE Layout 3D & Konsultasi Toko Saya.",
                    )
                  }
                  className="relative group w-full sm:w-auto bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
                  </span>
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Klaim FREE Layout 3D Sekarang</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#katalog"
                  className="w-full sm:w-auto text-center bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-6 py-4 rounded-xl transition-colors text-sm sm:text-base"
                >
                  Lihat Katalog Rak
                </a>
              </div>

              {/* Trust Micro Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-400 text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span>
                    <strong>850+ Toko</strong> Sukses Terlayani
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  <span>Suplier Resmi Retail Modern</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="md:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000"
                  alt="Rak Minimarket Ritelindo Group Layout Modern"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge Overlay 1 */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <div className="p-2 bg-red-600/20 text-red-500 rounded-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      Layout 3D Presisi
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Gratis Tanpa Biaya
                    </p>
                  </div>
                </div>

                {/* Floating Badge Overlay 2 */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <div className="p-2 bg-emerald-600/20 text-emerald-400 rounded-md">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      Free Ongkir Jawa-Bali
                    </p>
                    <p className="text-[10px] text-emerald-400 font-semibold">
                      100% Bebas Ongkos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="keunggulan" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Mengapa Ritelindo Group?
            </h2>
            <p className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              6 Keunggulan Utama Solusi Rak & Interior Toko Modern Kami
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Kami mengerti kebutuhan pemilik bisnis retail: Kualitas bahan
              maksimal, tampilan menarik, hemat anggaran, dan layanan tanpa
              ribet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES_DATA.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 hover:border-red-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-red-100 group-hover:bg-red-600 text-red-600 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section
        id="katalog"
        className="py-16 md:py-24 bg-slate-900 text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-extrabold uppercase px-3 py-1 rounded-full">
              Katalog Paket Setup Toko
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Pilihan Paket Setup Toko Siap Pakai
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Mulai dari upgrade toko kelontong daerah hingga proyek supermarket
              & rak gudang industri. Semua bisa dipesan custom!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-slate-800/90 rounded-2xl border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-red-500 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Badge */}
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 text-center">
                    {pkg.badge}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-white mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-slate-400 text-xs mb-6 min-h-[36px]">
                      {pkg.sub}
                    </p>

                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700 mb-6">
                      <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                        Estimasi Luas Toko:
                      </span>
                      <span className="text-sm font-bold text-yellow-400">
                        {pkg.estArea}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Termasuk Dalam Paket:
                      </p>
                      {pkg.features.map((ft, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ft}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-700/50 mt-auto">
                  <div className="my-6">
                    <p className="text-xs text-slate-400">
                      Est. Investasi Paket:
                    </p>
                    <p className="text-2xl font-black text-emerald-400">
                      {pkg.priceTag}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenModal(pkg.waMsg)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Minta Penawaran Paket</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-800/40 rounded-2xl p-6 border border-slate-700/60 text-center max-w-2xl mx-auto">
            <p className="text-sm text-slate-300">
              💡 Butuh pembelian{" "}
              <strong>eceran / eceran unit rak tunggal</strong> (Rak
              Wall/Island/Meja Kasir saja)? Tim sales kami siap membantu
              perhitungannya!
            </p>
          </div>
        </div>
      </section>

      {}
      <section id="layout3d" className="py-16 md:py-24 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-100 px-3 py-1 rounded-md">
                Layanan Desain 3D Gratis
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Bagaimana Cara Kerja Fasilitas Free Layout 3D?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Anda tidak perlu bingung mengukur dan membayangkan susunan rak.
                Cukup 4 langkah praktis dari HP Anda, tim Ritelindo akan
                memetakan presisi tata letak toko Anda.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3">
                <div className="flex items-center gap-3 text-slate-900 font-bold">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <span>Garansi Layout Presisi 100%</span>
                </div>
                <p className="text-xs text-slate-500">
                  Desain dibuat menggunakan software arsitektur retail terkini
                  sehingga tidak ada ruang toko yang terbuang percuma.
                </p>
              </div>

              <button
                onClick={() =>
                  handleOpenModal(
                    "Halo Ritelindo, saya ingin kirimkan sketsa toko untuk dibuatkan Layout 3D Gratis.",
                  )
                }
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all w-full sm:w-auto text-sm"
              >
                <Compass className="w-5 h-5" />
                <span>Kirim Sketsa Ruangan Sekarang</span>
              </button>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {STEPS_DATA.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-red-500 transition-colors"
                >
                  <div className="text-4xl font-black text-slate-200 group-hover:text-red-500/20 transition-colors absolute top-4 right-4">
                    {st.step}
                  </div>
                  <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="kalkulator" className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Anggaran Otomatis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                Hitung Estimasi Kebutuhan Rak Toko Anda
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Masukkan ukuran panjang dan lebar ruangan Anda untuk mendapatkan
                perkiraan kasar estimasi unit rak & investasi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Panjang Ruangan (Meter):
                </label>
                <input
                  type="number"
                  min="2"
                  max="50"
                  value={calcLength}
                  onChange={(e) => setCalcLength(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Lebar Ruangan (Meter):
                </label>
                <input
                  type="number"
                  min="2"
                  max="50"
                  value={calcWidth}
                  onChange={(e) => setCalcWidth(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                  Tipe Konsep Toko:
                </label>
                <select
                  value={calcType}
                  onChange={(e) => setCalcType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 font-bold"
                >
                  <option value="kelontong">Toko Kelontong Modern</option>
                  <option value="minimarket">Minimarket Standard</option>
                  <option value="supermarket">Supermarket Premium</option>
                </select>
              </div>
            </div>

            {/* Results Box */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 grid sm:grid-cols-3 gap-6 text-center items-center">
              <div>
                <span className="text-xs text-slate-400 block">
                  Total Luas Ruangan:
                </span>
                <span className="text-xl font-bold text-white">
                  {calcResult.area} m²
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">
                  Perkiraan Kebutuhan Rak:
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  ~{calcResult.approxWallRacks} Unit Wall + ~
                  {calcResult.approxIslandRacks} Unit Island
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">
                  Est. Anggaran Pabrik:
                </span>
                <span className="text-xl font-black text-emerald-400">
                  {calcResult.approxCostFormatted}
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() =>
                  handleOpenModal(
                    `Halo Ritelindo, hasil estimasi simulasi toko saya (${calcLength}x${calcWidth}m = ${calcResult.area}m²) adalah ${calcResult.approxCostFormatted}. Saya mau minta penawaran resmi & Layout 3D.`,
                  )
                }
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg inline-flex items-center gap-2 text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasikan Hasil Simulasi Ini via WA</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-md">
              Bukti Pengerjaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Galeri Portofolio & Kepercayaan Klien
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Ratusan toko kelontong, minimarket, apotek, hingga gudang telah
              terpasang rapi oleh tim Ritelindo Group di seluruh Indonesia.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PORTFOLIO_DATA.map((item, pIdx) => (
              <div
                key={pIdx}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, tIdx) => (
              <div
                key={tIdx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200/90 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-extrabold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-red-600 font-semibold">
                    {t.store}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section
        id="faq"
        className="py-16 md:py-24 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest">
              Paling Sering Ditanyakan
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Pertanyaan Umum (FAQ)
            </h2>
            <p className="text-slate-600 text-sm">
              Informasi lengkap seputar pemesanan rak, pengiriman, dan layanan
              3D layout Ritelindo Group.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-6 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:text-red-600 transition-colors"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-red-600" : ""}`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-28 md:pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-black text-xl text-white shadow-md">
                  R
                </div>
                <span className="text-xl font-black text-white tracking-tight">
                  RITELINDO <span className="text-red-500">GROUP</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Ritelindo Group adalah produsen & supplier B2B utama rak
                minimarket, rak supermarket, rak gudang, serta penyedia jasa
                interior toko modern bergaransi presisi.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="bg-slate-900 border border-slate-800 text-emerald-400 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Pabrik Beroperasi Normal
                </span>
              </div>
            </div>

            {/* Col 3: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Layanan
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#katalog"
                    className="hover:text-white transition-colors"
                  >
                    Paket Kelontong Modern
                  </a>
                </li>
                <li>
                  <a
                    href="#katalog"
                    className="hover:text-white transition-colors"
                  >
                    Paket Minimarket Standard
                  </a>
                </li>
                <li>
                  <a
                    href="#katalog"
                    className="hover:text-white transition-colors"
                  >
                    Rak Gudang Heavy Duty
                  </a>
                </li>
                <li>
                  <a
                    href="#layout3d"
                    className="hover:text-white transition-colors"
                  >
                    Desain Interior 3D Retail
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Area Layanan */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Cakupan Kirim
              </h4>
              <ul className="space-y-2 text-xs">
                <li>Free Ongkir Seluruh Jawa</li>
                <li>Free Ongkir Bali</li>
                <li>Free Rakit Jatim, Jateng & DIY</li>
                <li>Pengiriman Luar Pulau via Ekspedisi</li>
              </ul>
            </div>

            {/* Col 5: Kontak & Pabrik */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Kontak & Workshop
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    Kawasan Industri & Workshop Ritelindo Group, Jawa Timur
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Ritelindo Group (Ritelindo Akselera
              Kolaborasi). All Rights Reserved.
            </p>
            <p className="text-slate-600">
              Mini Test Web Developer - B2B Landing Page High-Converting
            </p>
          </div>
        </div>
      </footer>

      {}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 z-50 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] text-slate-400 font-medium">
            Konsultasi Promo Hari Ini:
          </p>
          <p className="text-xs font-bold text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            FREE Layout 3D & Ongkir
          </p>
        </div>
        <button
          onClick={() =>
            handleOpenModal(
              "Halo Tim Ritelindo, saya menghubungi dari mobile web untuk konsultasi rak toko.",
            )
          }
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-lg flex items-center gap-2 animate-bounce"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat WA Pabrik</span>
        </button>
      </div>

      {}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold mb-3">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Konsultasi & Klaim Promo 3D
              </h3>
              <p className="text-xs text-slate-500">
                Isi form singkat di bawah ini. Anda akan langsung terhubung ke
                WhatsApp resmi Sales Engine Ritelindo Group.
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Nama Lengkap / Owner:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bapak Ahmad"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Kota / Kabupaten:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Surabaya / Solo"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">
                    Jenis Usaha:
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Minimarket / Kelontong">
                      Minimarket / Kelontong
                    </option>
                    <option value="Apotek / Petshop">Apotek / Petshop</option>
                    <option value="Supermarket / Toko Baju">
                      Supermarket / Toko Baju
                    </option>
                    <option value="Rak Gudang Heavy Duty">
                      Rak Gudang / Warehouse
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Nomor WhatsApp Active:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="081234567xxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Pesan / Ukuran Toko:
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all text-base"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Ke WhatsApp Sales Engine</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
