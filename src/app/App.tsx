import { useState, useRef } from "react";
import { MapPin, Calendar, Trophy, Share2, ClipboardList, HelpCircle, Zap, Gauge, Timer, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { LegalModal } from "@/app/components/LegalModal";
import HubLogoSvg from "@/imports/HubLogoSvg";

import heroImg from "@/imports/hero-landong.jpg";
import bikeImg from "@/imports/moto.png";

const FORM_URL = "https://forms.gle/Kmsys9DtGWZzzxii9";

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Register at Our Stand",
    desc: "Complete the official participation form with your contact details at Stand C4.130.",
  },
  {
    num: "02",
    icon: Share2,
    title: "Share on LinkedIn",
    desc: "Take a photo at the E-HUB stand. Post it on LinkedIn with #PoweredByEHUB, tag E-HUB Energy, and follow our page.",
  },
  {
    num: "03",
    icon: HelpCircle,
    title: "Complete the Quiz",
    desc: "Answer three questions about energy storage solutions in the participation form.",
  },
];

const SPECS = [
  { icon: Zap, label: "Peak Power", value: "31 kW", sub: "42 hp" },
  { icon: Gauge, label: "Top Speed", value: "120 km/h", sub: "0–50 km/h in 2.6 s" },
  { icon: Timer, label: "Range", value: "130 km", sub: "8.9 kWh battery" },
  { icon: Trophy, label: "Fast Charging", value: "45 min", sub: "20–80% (optional)" },
];

function EntryButton({ agreed, onAgreementChange }: { agreed: boolean; onAgreementChange: (v: boolean) => void }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <a
        href={agreed ? FORM_URL : undefined}
        target={agreed ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={!agreed ? (e) => e.preventDefault() : undefined}
        aria-disabled={!agreed}
        className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[#0a1825] font-bold text-base transition-all shadow-lg
          ${agreed
            ? "bg-[#02ba3c] hover:bg-[#00d444] shadow-[#02ba3c]/20 hover:-translate-y-0.5 cursor-pointer"
            : "bg-[#02ba3c]/30 cursor-not-allowed shadow-none"
          }`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <Trophy size={18} className={agreed ? "" : "opacity-40"} />
        <span className={agreed ? "" : "opacity-40"}>Enter the Giveaway</span>
      </a>
      <label className="flex items-start gap-2.5 cursor-pointer group">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => onAgreementChange(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-[#02ba3c] cursor-pointer flex-shrink-0"
        />
        <span className="text-sm text-[#5a6475] group-hover:text-[#0a1825] transition-colors leading-snug">
          I have read and agree to the{" "}
          <span className="text-[#2d74b4] font-semibold">Terms & Conditions</span>{" "}
          and{" "}
          <span className="text-[#2d74b4] font-semibold">Privacy Notice</span>
        </span>
      </label>
      {!agreed && (
        <p className="text-xs text-[#e05a2b] font-medium -mt-1">
          Please accept the terms to continue
        </p>
      )}
    </div>
  );
}

function HeroCTAButton({ agreed, onAgreementChange }: { agreed: boolean; onAgreementChange: (v: boolean) => void }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <a
        href={agreed ? FORM_URL : undefined}
        target={agreed ? "_blank" : undefined}
        rel="noopener noreferrer"
        onClick={!agreed ? (e) => e.preventDefault() : undefined}
        aria-disabled={!agreed}
        className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[#0a1825] text-base font-bold transition-all shadow-xl
          ${agreed
            ? "bg-[#02ba3c] hover:bg-[#00d444] shadow-[#02ba3c]/30 hover:-translate-y-0.5 cursor-pointer"
            : "bg-[#02ba3c]/30 cursor-not-allowed shadow-none"
          }`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <Trophy size={20} className={agreed ? "" : "opacity-40"} />
        <span className={agreed ? "" : "opacity-40"}>Enter the Giveaway</span>
      </a>
      <label className="flex items-start gap-2.5 cursor-pointer group">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => onAgreementChange(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-[#02ba3c] cursor-pointer flex-shrink-0"
        />
        <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-snug">
          I have read and agree to the{" "}
          <span className="text-[#02ba3c] font-semibold">Terms & Conditions</span>{" "}
          and{" "}
          <span className="text-[#02ba3c] font-semibold">Privacy Notice</span>
        </span>
      </label>
      {!agreed && (
        <p className="text-xs text-[#f87c55] font-medium -mt-1">
          Please accept the terms to continue
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy'>('terms');
  const [heroAgreed, setHeroAgreed] = useState(false);
  const [prizeAgreed, setPrizeAgreed] = useState(false);
  const [ctaAgreed, setCtaAgreed] = useState(false);
  const participateRef = useRef<HTMLDivElement>(null);

  const openModal = (tab: 'terms' | 'privacy') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const scrollToParticipate = () => {
    participateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-[#f0efee] text-[#0a1825]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 w-full border-b border-black/8 bg-[#f0efee]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#" className="flex-shrink-0 h-8 w-auto" style={{ aspectRatio: "164/34", minWidth: 96 }}>
            <HubLogoSvg />
          </a>

          <nav className="flex items-center gap-2">
            <button
              onClick={() => openModal('terms')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/15 text-[#0a1825]/70 text-xs font-semibold hover:border-black/30 hover:text-[#0a1825] transition-all whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => openModal('privacy')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/15 text-[#0a1825]/70 text-xs font-semibold hover:border-black/30 hover:text-[#0a1825] transition-all whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Privacy Notice
            </button>

            <button
              onClick={scrollToParticipate}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#02ba3c] text-[#0a1825] text-sm font-bold hover:bg-[#00d444] transition-all shadow-md shadow-[#02ba3c]/25 whitespace-nowrap"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Trophy size={15} className="hidden sm:block" />
              <span>Enter the Giveaway</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0a1825]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImg}
            alt="E-HUB Energy Storage and BMW CE 04"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1825] via-[#0a1825]/50 to-[#0a1825]/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1825]/95 via-[#0a1825]/50 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-24 pt-24 sm:pt-32 min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#02ba3c]/20 border border-[#02ba3c]/40 text-[#02ba3c] text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#02ba3c] animate-pulse" />
              Intersolar Europe 2026 · Munich
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#f0efee] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Win a BMW
              <br />
              <span className="text-[#02ba3c]">CE 04</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#f0efee]/80 leading-relaxed mb-10 max-w-lg font-medium">
              Visit the E-HUB Energy stand at Intersolar Europe 2026 and get your chance to win the electric scooter of the future.
            </p>

            <HeroCTAButton agreed={heroAgreed} onAgreementChange={setHeroAgreed} />
          </div>

          <button
            onClick={scrollToParticipate}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── EVENT DETAILS STRIP ── */}
      <section className="border-b border-black/8 bg-white shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-black/8">
            <div className="flex items-center gap-4 sm:pr-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2d74b4]/10 flex items-center justify-center">
                <MapPin size={18} className="text-[#2d74b4]" />
              </div>
              <div>
                <p className="text-[#5a6475] text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-[#0a1825] font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Stand C4.130 · Messe München
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:px-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#2d74b4]/10 flex items-center justify-center">
                <Calendar size={18} className="text-[#2d74b4]" />
              </div>
              <div>
                <p className="text-[#5a6475] text-xs font-bold uppercase tracking-wider mb-1">Exhibition Dates</p>
                <p className="text-[#0a1825] font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  23–25 June 2026
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:pl-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#02ba3c]/10 flex items-center justify-center">
                <Trophy size={18} className="text-[#02ba3c]" />
              </div>
              <div>
                <p className="text-[#5a6475] text-xs font-bold uppercase tracking-wider mb-1">Winner Announcement</p>
                <p className="text-[#0a1825] font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  25 June · Live at 3:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GRAND PRIZE CEREMONY HIGHLIGHT ── */}
      <section className="bg-[#0a1825] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#02ba3c]/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-[#2d74b4]/15 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Icon */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#02ba3c]/15 border border-[#02ba3c]/30 flex items-center justify-center shadow-lg shadow-[#02ba3c]/10">
              <Trophy size={36} className="text-[#02ba3c]" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-[#02ba3c]/20 border border-[#02ba3c]/30 text-[#02ba3c] text-[11px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02ba3c] animate-pulse" />
                Grand Prize Ceremony
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                25 June · 3:00 PM · Stand C4.130
              </h2>
              <p className="text-white/60 text-base font-medium">
                Winner must be present at the stand to claim the prize.
              </p>
            </div>

            {/* Right badge */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1 px-6 py-4 rounded-2xl border-2 border-[#02ba3c]/40 bg-[#02ba3c]/10 text-center">
              <span className="text-[#02ba3c] text-xs font-bold uppercase tracking-wider">Prize Value</span>
              <span className="text-white text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>~€12,000</span>
              <span className="text-white/50 text-xs">BMW CE 04</span>
            </div>
          </div>

          {/* Warning line */}
          <div className="mt-6 flex items-start gap-3 bg-amber-400/10 border border-amber-400/25 rounded-xl px-5 py-3">
            <span className="text-amber-400 text-lg leading-none mt-0.5">⚠</span>
            <p className="text-amber-200/80 text-sm font-medium leading-snug">
              <strong className="text-amber-300">You must be physically present</strong> at Stand C4.130 on 25 June at 3:00 PM CET. If the selected winner is not present within 10 minutes after being announced, the Organizer may select an alternative winner.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRIZE SECTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* image */}
          <div className="order-1 lg:order-1 relative">
            <div className="absolute -inset-8 bg-[#2d74b4]/5 rounded-[3rem] -z-10" />
            <div className="relative rounded-3xl p-8 flex items-center justify-center bg-white/60 shadow-sm border border-black/5">
              <ImageWithFallback
                src={bikeImg}
                alt="BMW CE 04 electric scooter side view"
                className="w-full h-auto object-contain scale-110 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* text */}
          <div className="order-2 lg:order-2">
            <p
              className="text-[#2d74b4] text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Grand Prize
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#0a1825] leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              BMW CE 04
              <span className="block text-[#2d74b4]">Electric Scooter</span>
            </h2>
            <p className="text-[#5a6475] text-lg leading-relaxed mb-10 font-medium">
              The flagship urban electric scooter from BMW Motorrad. Equipped with a 10.25-inch TFT display, active smartphone cooling, and full LED lighting. Eco-friendly, powerful, and built for the modern city.
            </p>

            {/* spec grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {SPECS.map((s) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl border border-black/8 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <s.icon size={16} className="text-[#2d74b4]" />
                    <span className="text-[#5a6475] text-xs font-bold uppercase tracking-wider">{s.label}</span>
                  </div>
                  <p
                    className="text-[#0a1825] text-2xl font-bold leading-none mb-1.5"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#5a6475] text-sm font-medium">{s.sub}</p>
                </div>
              ))}
            </div>

            <EntryButton agreed={prizeAgreed} onAgreementChange={setPrizeAgreed} />
          </div>
        </div>
      </section>

      {/* ── HOW TO PARTICIPATE ── */}
      <section className="bg-white border-y border-black/8" ref={participateRef} id="participate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <p
              className="text-[#2d74b4] text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Participate
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#0a1825]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl border border-black/8 bg-[#f0efee] group hover:border-[#2d74b4]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-6xl font-bold text-black/5 select-none leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#2d74b4]/10 border border-[#2d74b4]/20 flex items-center justify-center group-hover:bg-[#2d74b4]/20 group-hover:scale-110 transition-all">
                    <step.icon size={22} className="text-[#2d74b4]" />
                  </div>
                </div>
                <h3
                  className="text-[#0a1825] font-bold text-xl mb-4 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#5a6475] text-base font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA under steps */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <a
                href={ctaAgreed ? FORM_URL : undefined}
                target={ctaAgreed ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={!ctaAgreed ? (e) => e.preventDefault() : undefined}
                aria-disabled={!ctaAgreed}
                className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-[#0a1825] text-lg font-bold transition-all shadow-xl
                  ${ctaAgreed
                    ? "bg-[#02ba3c] hover:bg-[#00d444] shadow-[#02ba3c]/20 hover:-translate-y-1 cursor-pointer"
                    : "bg-[#02ba3c]/30 cursor-not-allowed shadow-none"
                  }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Trophy size={22} className={ctaAgreed ? "" : "opacity-40"} />
                <span className={ctaAgreed ? "" : "opacity-40"}>Enter the Giveaway</span>
              </a>
              <label className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={ctaAgreed}
                  onChange={(e) => setCtaAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#02ba3c] cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-[#5a6475] group-hover:text-[#0a1825] transition-colors leading-snug">
                  I have read and agree to the{" "}
                  <button onClick={() => openModal('terms')} className="text-[#2d74b4] font-semibold hover:underline">Terms & Conditions</button>
                  {" "}and{" "}
                  <button onClick={() => openModal('privacy')} className="text-[#2d74b4] font-semibold hover:underline">Privacy Notice</button>
                </span>
              </label>
              {!ctaAgreed && (
                <p className="text-xs text-[#e05a2b] font-medium -mt-1">
                  Please accept the terms to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0a1825] p-12 sm:p-16 lg:p-20 text-center shadow-2xl">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2d74b4]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#02ba3c]/15 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-wider border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#02ba3c] animate-pulse" />
              Draw takes place on 25 June at 3:00 PM
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0efee] mb-8 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Don't miss your chance.
              <br />
              <span className="text-[#02ba3c]">Claim your BMW CE 04.</span>
            </h2>

            {/* Final CTA inline */}
            <div className="flex flex-col items-center gap-3">
              <a
                href={ctaAgreed ? FORM_URL : undefined}
                target={ctaAgreed ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={!ctaAgreed ? (e) => e.preventDefault() : undefined}
                aria-disabled={!ctaAgreed}
                className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-[#0a1825] text-lg font-bold transition-all shadow-xl
                  ${ctaAgreed
                    ? "bg-[#02ba3c] hover:bg-[#00d444] shadow-[#02ba3c]/20 hover:-translate-y-1 cursor-pointer"
                    : "bg-[#02ba3c]/30 cursor-not-allowed shadow-none"
                  }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Trophy size={22} className={ctaAgreed ? "" : "opacity-40"} />
                <span className={ctaAgreed ? "" : "opacity-40"}>Enter the Giveaway</span>
              </a>
              <label className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={ctaAgreed}
                  onChange={(e) => setCtaAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#02ba3c] cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-snug">
                  I have read and agree to the{" "}
                  <button onClick={(e) => { e.preventDefault(); openModal('terms'); }} className="text-[#02ba3c] font-semibold hover:underline">Terms & Conditions</button>
                  {" "}and{" "}
                  <button onClick={(e) => { e.preventDefault(); openModal('privacy'); }} className="text-[#02ba3c] font-semibold hover:underline">Privacy Notice</button>
                </span>
              </label>
              {!ctaAgreed && (
                <p className="text-xs text-[#f87c55] font-medium -mt-1">
                  Please accept the terms to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-black/8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="h-7" style={{ aspectRatio: "164/34", width: "auto", minWidth: 80 }}>
            <HubLogoSvg />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#5a6475] text-sm font-medium">
            <span>Intersolar Europe 2026 · Stand C4.130</span>
            <span className="hidden md:inline text-black/20">|</span>
            <button
              onClick={() => openModal('terms')}
              className="hover:text-[#0a1825] transition-colors underline underline-offset-4"
            >
              Terms & Conditions
            </button>
            <span className="hidden md:inline text-black/20">|</span>
            <button
              onClick={() => openModal('privacy')}
              className="hover:text-[#0a1825] transition-colors underline underline-offset-4"
            >
              Privacy Notice
            </button>
          </div>
        </div>
      </footer>

      {legalModalOpen && <LegalModal onClose={() => setLegalModalOpen(false)} initialTab={legalModalTab} />}
    </div>
  );
}
