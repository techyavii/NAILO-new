import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  PlayCircle,
  Sparkles,
  BrainCircuit,
  LineChart,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const badges = [
  "NEP 2020 Aligned",
  "National-Level Olympiad",
  "AI Literacy Initiative",
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* gradient blobs */}
      <div className="blob w-[520px] h-[520px] -top-32 -left-32 bg-blue-300/40" />
      <div className="blob w-[460px] h-[460px] top-20 -right-20 bg-violet-300/40 animate-float-slow" />
      <div className="blob w-[360px] h-[360px] bottom-0 left-1/3 bg-indigo-300/30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground/80 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            India's First National AI Literacy Olympiad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            National AI Literacy{" "}
            <span className="text-gradient">Olympiad</span>{" "}
            <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-5xl mt-2">
              NAILO 2026-27
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            The National Assessment for Computational Thinking & Artificial
            Intelligence Literacy. Empowering the next generation of digital
            thinkers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-soft border border-primary/10 text-sm font-medium text-foreground/80"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            No prior coding experience required. Just pure logic.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-white text-sm font-semibold shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#syllabus"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-border text-sm font-semibold hover:border-primary/40 hover:text-primary transition-colors shadow-soft"
            >
              <Download className="w-4 h-4" /> Download Syllabus
            </a>
            <a
              href="#mock"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              <PlayCircle className="w-4 h-4" /> Try Mock Test
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <span
                key={b}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-border text-foreground/70 shadow-soft"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: AI illustration */}
        <div className="lg:col-span-6 relative h-[520px] lg:h-[600px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full">
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 rounded-3xl glass-strong shadow-glow overflow-hidden p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand grid place-items-center">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold">Student Dashboard</div>
              <div className="text-[11px] text-muted-foreground">Live performance</div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-300" />
            <span className="w-2 h-2 rounded-full bg-yellow-300" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Percentile", value: "94.7" },
            { label: "Accuracy", value: "88%" },
            { label: "Rank", value: "#312" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/70 border border-border p-3">
              <div className="text-[10px] text-muted-foreground">{s.label}</div>
              <div className="text-lg font-bold text-gradient">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white/80 border border-border p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold">AI Literacy Progress</div>
            <LineChart className="w-3.5 h-3.5 text-primary" />
          </div>
          <svg viewBox="0 0 300 80" className="w-full h-20">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 Q40 50 60 45 T120 30 T180 22 T240 14 T300 8 L300 80 L0 80 Z"
              fill="url(#g1)"
            />
            <path
              d="M0 60 Q40 50 60 45 T120 30 T180 22 T240 14 T300 8"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
            <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span><span>Wk 5</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {["Computational Thinking", "Ethical AI"].map((t) => (
            <div key={t} className="rounded-xl bg-gradient-soft p-3">
              <div className="text-[10px] text-muted-foreground">Module</div>
              <div className="text-xs font-semibold">{t}</div>
              <div className="mt-2 h-1.5 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-brand rounded-full" style={{ width: "78%" }} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute -left-4 lg:-left-10 top-10 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-brand grid place-items-center">
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-[10px] text-muted-foreground">Top Prize</div>
          <div className="text-sm font-bold">₹1,00,000</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute -right-2 lg:-right-6 bottom-16 glass rounded-2xl px-4 py-3 animate-float-slow"
      >
        <div className="text-[10px] text-muted-foreground">National Rank</div>
        <div className="text-sm font-bold text-gradient">Powered by AI</div>
        <div className="mt-1 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] text-muted-foreground">Live evaluation</span>
        </div>
      </motion.div>
    </div>
  );
}
