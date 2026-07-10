import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

type Section = { title: string; topics: string[] };
type Division = { name: string; tag: string; sections: Section[] };

const data: Division[] = [
  {
    name: "Junior Division",
    tag: "Classes VI–VIII",
    sections: [
      {
        title: "Section A · Computational Logic & Reasoning",
        topics: [
          "Pattern recognition",
          "Visual reasoning",
          "Sequencing and arrangements",
          "Deductive logic puzzles",
          "Spatial reasoning",
          "Basic analytical thinking",
        ],
      },
      {
        title: "Section B · AI & Technology Awareness",
        topics: [
          "Introduction to Artificial Intelligence",
          "AI in everyday life",
          "Smart devices and automation",
          "Voice assistants and recommendation systems",
          "Basics of digital privacy",
          "Safe and responsible technology usage",
        ],
      },
      {
        title: "Section C · Creativity & Prompt Thinking",
        topics: [
          "Understanding prompts",
          "Basic prompt framing",
          "AI-generated responses",
          "Real-life AI use cases",
          "Ethical use of AI tools",
        ],
      },
      {
        title: "Section D · Achiever's Section",
        topics: [
          "Multi-step logic problems",
          "Applied reasoning scenarios",
          "Technology-based analytical case studies",
        ],
      },
    ],
  },
  {
    name: "Senior Division",
    tag: "Classes IX–XII",
    sections: [
      {
        title: "Section A · Computational Thinking & Algorithmic Logic",
        topics: [
          "Boolean logic",
          "Flowchart interpretation",
          "Algorithmic reasoning",
          "Pseudo-code tracing",
          "Data interpretation basics",
        ],
      },
      {
        title: "Section B · Applied Artificial Intelligence",
        topics: [
          "Fundamentals of Generative AI",
          "Introduction to NLP",
          "Computer Vision and Data Science",
          "AI applications across industries",
          "Prompt engineering fundamentals",
          "AI limitations and hallucinations",
        ],
      },
      {
        title: "Section C · AI Ethics & Responsible Technology",
        topics: [
          "Algorithmic bias",
          "Ethical AI usage",
          "Data privacy and misinformation",
          "Human vs AI decision-making",
          "Responsible digital citizenship",
        ],
      },
      {
        title: "Section D · Achiever's Section",
        topics: [
          "Multi-variable logic scenarios",
          "Advanced case studies",
          "Real-world AI application analysis",
          "Technology ethics problem-solving",
        ],
      },
    ],
  },
];

export function Syllabus() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="syllabus" className="relative py-16 lg:py-24 px-5 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Syllabus"
          title={
            <>
              A <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Comprehensive</span> AI-Literacy Framework
            </>
          }
          description="Designed by educators and AI practitioners. Built around four modules in every division."
        />

        <Reveal>
          <div className="mt-12 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border-2 border-blue-200 shadow-lg">
              {data.map((d, i) => (
                <button
                  key={d.name}
                  onClick={() => {
                    setTab(i);
                    setOpen(0);
                  }}
                  className={`px-6 sm:px-9 py-3 rounded-xl text-base font-bold transition-all ${
                    tab === i
                      ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {d.name}
                  <span className="hidden sm:inline ml-3 text-sm opacity-80 font-semibold">
                    {d.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 max-w-5xl mx-auto">
          <div className="space-y-4 lg:space-y-5">
            {data[tab].sections.map((s, i) => {
              const isOpen = open === i;
              const bgColors = ["bg-blue-50", "bg-green-50", "bg-purple-50", "bg-yellow-50"];
              const borderColors = ["border-blue-300", "border-green-300", "border-purple-300", "border-yellow-300"];
              const iconColors = ["from-blue-500 to-blue-600", "from-green-500 to-green-600", "from-purple-500 to-purple-600", "from-yellow-500 to-yellow-600"];
              
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className={`rounded-3xl border-2 ${bgColors[i]} ${borderColors[i]} shadow-md hover:shadow-lg overflow-hidden transition-all`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 lg:px-8 py-6 lg:py-7 text-left hover:bg-white/30 transition-colors"
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconColors[i]} grid place-items-center text-white shrink-0`}>
                          <Layers className="w-6 h-6" />
                        </div>
                        <div className="text-lg lg:text-xl font-bold text-foreground">{s.title}</div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-foreground/70 transition-transform shrink-0 ${
                          isOpen ? "rotate-180" : ""
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
                          className="overflow-hidden border-t-2"
                        >
                          <div className="px-6 lg:px-8 py-6">
                            <ul className="grid sm:grid-cols-2 gap-4">
                              {s.topics.map((t) => (
                                <li
                                  key={t}
                                  className="flex items-start gap-3 text-base text-foreground/85 font-medium"
                                >
                                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shrink-0" />
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
