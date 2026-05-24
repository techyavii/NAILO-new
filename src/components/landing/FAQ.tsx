import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const faqs = [
  {
    q: "What is NAILO?",
    a: "NAILO — the National AI Literacy Olympiad — is India's national-level assessment for computational thinking and artificial intelligence literacy, open to school students from Classes 6 to 12.",
  },
  {
    q: "Who can participate?",
    a: "Any school student from Classes 6 to 12, across CBSE, ICSE, State Boards and International Boards. Students compete within their division: Junior (6–8) or Senior (9–12).",
  },
  {
    q: "Is coding required?",
    a: "No. NAILO measures the thinking behind AI — logic, reasoning, decomposition and ethical awareness — not programming syntax. No prior coding experience is needed.",
  },
  {
    q: "How is the exam conducted?",
    a: "The exam is conducted online through the NAILO platform, with secure proctoring and instant scoring. Students receive admit cards and detailed AI-generated performance reports.",
  },
  {
    q: "What are the rewards?",
    a: "A ₹1,00,000 grand prize for the national topper, plus Gold, Silver and Bronze medals, digital certificates and national recognition through the NAILO Wall of Fame.",
  },
  {
    q: "How do students register?",
    a: "Click Register Now, fill in your school and student details, complete the registration fee payment and instantly unlock your dashboard, mock tests and study material.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title={
            <>
              Answers to the <span className="text-gradient">big questions</span>
            </>
          }
          description="If something isn't here, our team is one message away."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-border shadow-soft overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-soft grid place-items-center text-primary shrink-0">
                        <HelpCircle className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-semibold">{f.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${
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
                        <div className="px-5 sm:px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                          {f.a}
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
    </section>
  );
}
