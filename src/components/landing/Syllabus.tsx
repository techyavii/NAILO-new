import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

type Section = { title: string; topics: string[] };
type Division = { name: string; tag: string; sections: Section[] };

const data: Division[] = [
  {
    name: "Junior Division",
    tag: "Classes 6 – 8",
    sections: [
      {
        title: "Section A · Computational Thinking",
        topics: [
          "Pattern recognition basics",
          "Sequencing and instructions",
          "Decomposition of simple problems",
          "Abstraction through everyday examples",
        ],
      },
      {
        title: "Section B · Logical Reasoning",
        topics: [
          "Series and analogies",
          "Coding–decoding puzzles",
          "Cause and effect",
          "Visual reasoning",
        ],
      },
      {
        title: "Section C · Introduction to AI",
        topics: [
          "What is AI vs traditional software",
          "Machine learning in daily life",
          "Voice assistants & recommendations",
          "AI tools students already use",
        ],
      },
      {
        title: "Section D · Ethics & Awareness",
        topics: [
          "Safe and responsible internet use",
          "Bias in everyday systems",
          "Personal data & privacy basics",
          "Being a thoughtful AI user",
        ],
      },
    ],
  },
  {
    name: "Senior Division",
    tag: "Classes 9 – 12",
    sections: [
      {
        title: "Section A · Advanced Computational Thinking",
        topics: [
          "Algorithmic problem solving",
          "Complexity & efficiency intuition",
          "Data representation",
          "Optimisation strategies",
        ],
      },
      {
        title: "Section B · Applied AI Literacy",
        topics: [
          "Supervised vs unsupervised learning",
          "Training data and model behaviour",
          "Large language models, simply explained",
          "AI in healthcare, mobility & climate",
        ],
      },
      {
        title: "Section C · Mathematical Foundations",
        topics: [
          "Probability and statistics basics",
          "Functions and graphs",
          "Linear thinking and vectors",
          "Logic and proof structures",
        ],
      },
      {
        title: "Section D · Ethical & Societal AI",
        topics: [
          "Bias, fairness and explainability",
          "Privacy, consent and surveillance",
          "Automation and the future of work",
          "Responsible AI frameworks",
        ],
      },
    ],
  },
];

export function Syllabus() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="syllabus" className="relative py-20 lg:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Syllabus"
          title={
            <>
              A <span className="text-gradient">comprehensive</span> AI literacy framework
            </>
          }
          description="Designed by educators and AI practitioners. Built around four pillars in every division."
        />

        <Reveal>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex p-1 rounded-full bg-white border border-border shadow-soft">
              {data.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => {
                    setTab(i);
                    setOpen(0);
                  }}
                  className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    tab === i
                      ? "bg-gradient-brand text-white shadow-glow"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {d.name}
                  <span className="hidden sm:inline ml-2 text-xs opacity-70">
                    {d.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="space-y-3">
            {data[tab].sections.map((s, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="rounded-2xl bg-white border border-border shadow-soft overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-soft grid place-items-center text-primary">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div className="font-semibold">{s.title}</div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1">
                            <ul className="grid sm:grid-cols-2 gap-2.5">
                              {s.topics.map((t) => (
                                <li
                                  key={t}
                                  className="flex items-start gap-3 text-sm text-foreground/80"
                                >
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-brand shrink-0" />
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
