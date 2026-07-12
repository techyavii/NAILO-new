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
    a: "The exam is conducted online through the NAILO platform, with secure proctoring.",
  },
  {
    q: "What are the rewards?",
    a: "A ₹3,00,000+ grand prize pool for the national topper, plus Gold, Silver and Bronze medals, digital certificates and national recognition through the NAILO Wall of Fame.",
  },
  {
    q: "How do students register?",
    a: "Click the registration link, pay ₹399 and instantly unlock your dashboard, study resources and learning material.",
  },
  {
    q: "Who can become a NAILO Partner School?",
    a: "Schools across India offering Classes VI-XII are welcome to partner with NAILO, irrespective of their education board, provided they share our vision of preparing students for an AI-driven future.",
  },
  {
    q: "Is there a partnership fee?",
    a: "No. There is no partnership fee for schools. Students participate by registering for the Olympiad through the prescribed registration process.",
  },
  {
    q: "Is coding knowledge required for students?",
    a: "No. NAILO focuses on AI literacy, computational thinking, logical reasoning, responsible AI and real-world applications. Prior coding knowledge is not required.",
  },
  {
    q: "What is the role of the School Ambassador?",
    a: "The School Ambassador acts as the primary point of contact between the school and NAILO, helping coordinate registrations, communication and Olympiad-related activities.",
  },
  {
    q: "What resources are provided to students?",
    a: "Registered students receive access to a personalized dashboard containing study material, the AI Basics e-Guide, practice questions, the Parent Handbook, examination updates and digital certificates.",
  },
  {
    q: "How are schools recognized?",
    a: "Partner Schools receive official recognition through certificates and opportunities for awards based on participation and performance. Outstanding principals, educators, school ambassadors and students are also recognized.",
  },
  {
    q: "How are student performances evaluated?",
    a: "Schools receive detailed performance reports with benchmarking at the school, state and national levels, helping educators understand learning outcomes and identify areas for improvement.",
  },
  {
    q: "How can our school become a Partner School?",
    a: "Schools can submit a partnership enquiry through our website or contact the NAILO Partnership Team. Our team will schedule a complimentary online interaction to explain the partnership model and answer any questions.",
  },
  {
    q: "Who should we contact for partnership enquiries?",
    a: "You can reach the NAILO Partnership Team through our official email or contact form. We would be happy to arrange an online presentation and guide your institution through the partnership process.",
  },
  {
    q: "Why should our school partner with NAILO?",
    a: "Partnering with NAILO helps you promote AI literacy aligned with NEP 2020, offer future-ready learning opportunities, gain national recognition, empower educators through the School Ambassador Program, and access performance analytics as part of a growing AI literacy ecosystem.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="relative py-5 px-5 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQs"
          title={
            <>
              Answers to the <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Big Questions</span>
            </>
          }
          description="If something isn't here, reach out to our support team at support@nailolympiad.com — we're here to help!"
        />

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border-2 border-blue-200 shadow-md hover:shadow-lg overflow-hidden transition-all">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 lg:py-6 text-left hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 grid place-items-center text-white shrink-0 font-bold text-lg">
                        {i + 1}
                      </div>
                      <span className="text-lg lg:text-xl font-bold text-foreground">{f.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 transition-transform shrink-0 ${
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
                        className="overflow-hidden border-t-2 border-blue-200 bg-blue-50/30"
                      >
                        <div className="px-6 py-6 text-base lg:text-lg text-foreground/85 leading-relaxed font-medium">
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
