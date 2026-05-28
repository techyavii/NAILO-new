import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  PlayCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

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
  return (
    <section
      id="home"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <div className="blob w-[520px] h-[520px] -top-32 -left-32 bg-blue-300/40" />
      <div className="blob w-[460px] h-[460px] top-20 -right-20 bg-green-300/40 animate-float-slow" />
      <div className="blob w-[360px] h-[360px] bottom-0 left-1/3 bg-purple-300/30" />

      {/* Floating Shapes */}
      <div className="absolute top-32 left-10 w-16 h-16 rounded-full bg-yellow-200/60 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-700 mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          🇮🇳 India's First National AI Literacy Olympiad
        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex justify-center mb-6"
>
  <img
    src="/NAILO_LOGO.png"
    alt="NAILO Logo"
    className="h-12 sm:h-14 lg:h-20 w-auto object-contain"
  />
</motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mx-auto"
        >
          National AI Literacy{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
            Olympiad
          </span>
          <span className="block text-5xl sm:text-6xl mt-4">
            NAILO 2026
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 text-xl lg:text-2xl text-foreground/75 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          The National Assessment for Computational Thinking &
          Artificial Intelligence Literacy
          <span className="block mt-3 text-foreground font-bold">
            Empowering the next generation of digital thinkers
          </span>
        </motion.p>

        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 text-base font-semibold text-green-700 mx-auto shadow-sm"
        >
          <CheckCircle2 className="w-5 h-5" />
          No coding required. Just logic, creativity & curiosity
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            🚀 Register Now
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#syllabus"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-blue-200 text-blue-600 text-base font-bold hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Syllabus
          </a>

          <a
            href="#mock"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-green-50 border-2 border-green-200 text-green-700 text-base font-bold hover:bg-green-100 transition-all shadow-md hover:shadow-lg"
          >
            <PlayCircle className="w-5 h-5" />
            Try Mock Test
          </a>
        </motion.div>

        {/* Child-Friendly Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex justify-center gap-5 flex-wrap"
        >
          {features.map((item) => (
            <div
              key={item}
              className="px-5 py-3 rounded-2xl bg-white/80 backdrop-blur border border-blue-100 shadow-sm text-sm font-semibold text-foreground/80 hover:scale-105 hover:shadow-md transition-all"
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
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-100 to-yellow-50 border-2 border-yellow-300 text-yellow-800 shadow-sm"
            >
              ⭐ {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}