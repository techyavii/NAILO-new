import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  PlayCircle,
  Sparkles,
  CheckCircle2,
  Eye,
  School,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";

const badges = [
  "NEP 2020 Aligned",
  "National-Level Olympiad",
  "AI Literacy Initiative",
];

const features = [
  "🧠 Logical Thinking",
  "🤖 AI Awareness",
  "🏆 National Recognition",
  "🎯 Fun Learning",
];

export function Hero() {
  const carouselImages = [
    { src: "/images/banner.png", alt: "University of Essex Campus" },
    { src: "/images/banner2.jpeg", alt: "University of Essex Building" },
    { src: "/images/banner3.jpeg", alt: "University of Essex Entrance" },
    { src: "/images/banner4.jpeg", alt: "Aerial view of University of Essex" },
  ];
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fcfeff_0%,#f7fbff_100%)] px-5 py-16 lg:px-8 lg:py-10"
    >

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          🇮🇳 India's First National AI Literacy Olympiad
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <ImageCarousel images={carouselImages} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          National AI Literacy{" "}
          <span className="text-blue-700">
            Olympiad
          </span>
          <span className="block text-5xl sm:text-6xl mt-4">
            NAILO 2026 - 2027
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg sm:text-base"
        >
          🎉 ₹3 Lakh+ Prize Pool | Win cash awards, trophies and national recognition
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 lg:text-2xl"
        >
          The National Assessment for Computational Thinking &
          Artificial Intelligence Literacy
          <span className="mt-3 block font-semibold text-slate-900">
            Empowering the next generation of digital thinkers
          </span>
        </motion.p>

        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-700 shadow-sm"
        >
          <CheckCircle2 className="w-5 h-5" />
          No coding required. Just logic, creativity & curiosity
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://rzp.io/rzp/sKBaz3gm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            🚀 Register Now ₹399
          </a>

          <a
            href="https://forms.gle/9HxrA5zhMAnMp7oE6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-white"
          >
            <School className="w-5 h-5" />
            Register Your School
          </a>

          <a
            href="/syllabus"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
          >
            <Eye className="w-5 h-5" />
            View Syllabus
          </a>

        </motion.div>

        {/* Child-Friendly Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex justify-center gap-5 flex-wrap"
        >
          {features.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* Bottom Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              ⭐ {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}