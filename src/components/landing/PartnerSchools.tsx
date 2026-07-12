import { useState } from "react";
import {
  Mail,
  School,
  Sparkles,
  Award,
  BarChart3,
  ShieldCheck,
  Megaphone,
  HeartHandshake,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  ClipboardList,
  FileText,
  LayoutDashboard,
  BadgeCheck,
  LineChart,
  TrendingUp,
  Lightbulb,
  Trophy,
  UserCheck,
  Rocket,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const whyPartner = [
  {
    icon: Award,
    title: "National Recognition",
    desc: "Be recognized as an Official NAILO Partner School committed to fostering AI literacy and innovation in education.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Education",
    desc: "Introduce students to computational thinking, logical reasoning and responsible AI concepts that prepare them for tomorrow's opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "NEP 2020 Aligned",
    desc: "Support the vision of the National Education Policy by promoting essential 21st-century competencies through AI literacy.",
  },
  {
    icon: Megaphone,
    title: "Teacher Leadership",
    desc: "Empower educators through the NAILO School Ambassador Program and encourage AI-led initiatives within your institution.",
  },
  {
    icon: BarChart3,
    title: "Performance Benchmarking",
    desc: "Receive comprehensive school, state and national performance reports to evaluate student learning outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Partnership Support",
    desc: "Our team works closely with Partner Schools to ensure a smooth and successful Olympiad experience.",
  },
];

const partnerBenefits = [
  "Official NAILO Partner School Recognition",
  "School AI Ambassador Program",
  "National & State Performance Benchmarking",
  "Awards & Recognition for Schools, Principals, Teachers & Students",
  "Student Preparation Resources",
  "Dedicated Partnership Support",
  "Opportunities to participate in future AI literacy initiatives",
];

const benchmarkingItems = [
  { icon: School, label: "School Performance Analysis" },
  { icon: LineChart, label: "State-Level Benchmarking" },
  { icon: Trophy, label: "National-Level Benchmarking" },
  { icon: TrendingUp, label: "Performance Trends" },
  { icon: Lightbulb, label: "Learning Insights to support academic improvement" },
];

const recognitionCategories = [
  { emoji: "🏫", label: "Partner Schools" },
  { emoji: "👩‍🏫", label: "NAILO School Ambassadors" },
  { emoji: "🎓", label: "Students" },
];

const resources = [
  { icon: BookOpen, label: "Olympiad Preparation Guide" },
  { icon: Sparkles, label: "AI Basics e-Guide" },
  { icon: ClipboardList, label: "Practice Question Bank" },
  { icon: FileText, label: "Parent Handbook" },
  { icon: LayoutDashboard, label: "Personalized Student Dashboard" },
  { icon: BadgeCheck, label: "Digital Certificates & Result Updates" },
];


function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white/80">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-foreground sm:text-base">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/70">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function PartnerSchools() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative py-16 px-5 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="School partnership"
          title={
            <>
              Partner with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                NAILO
              </span>
            </>
          }
          description="Empower your students with AI literacy and future-ready skills by becoming a NAILO Partner School. Join a nationwide initiative aligned with NEP 2020 and position your institution among schools preparing learners for an AI-driven future."
        />

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:support@nailolympiad.com?subject=Partner%20School%20Enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Become a Partner School
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:scale-105 hover:bg-blue-50"
            >
              Download Partner Schools Brochure
            </a>
          </div>
        </Reveal>

        {/* Why partner */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-2xl font-bold text-foreground">Why Partner with NAILO?</h3>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyPartner.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="h-full rounded-[2rem] border border-blue-200 bg-white/80 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-5 text-lg font-bold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Benefits + Ambassador program */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Partner school benefits
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Why Schools Choose NAILO</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Partner Schools become part of a growing national AI literacy ecosystem that goes
                beyond an Olympiad, with recognition, educator engagement, student development and
                academic benchmarking.
              </p>
              <ul className="mt-6 space-y-3">
                {partnerBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 rounded-2xl bg-white/70 p-4 text-sm font-medium text-foreground/80"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-[2rem] border border-blue-200 bg-white/80 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-md">
                <UserCheck className="h-7 w-7" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                School Ambassador Program
              </p>
              <h3 className="mt-2 text-xl font-bold text-foreground">Lead AI Literacy in Your School</h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                Every Partner School nominates a NAILO School Ambassador (Faculty Coordinator) who
                serves as the primary coordinator for the Olympiad and promotes AI literacy
                initiatives within the institution.
              </p>

              <div className="mt-6 flex-1 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 p-5">
                <p className="text-sm font-semibold text-foreground">Get in touch with our team</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Have a question before nominating your ambassador? Our partnership team is happy
                  to help.
                </p>
                <a
                  href="mailto:support@nailolympiad.com"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  support@nailolympiad.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Performance & benchmarking */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Performance & benchmarking
              </p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">Measure. Compare. Improve.</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Gain valuable insights into your students' performance through comprehensive
                analytical reports.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {benchmarkingItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/80 p-4"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span className="text-sm font-medium text-foreground/80">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Recognition */}
        <Reveal>
          <div className="mt-16 rounded-[2rem] border border-green-200 bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Recognition</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Celebrating Excellence</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
              NAILO recognizes outstanding contributions across the entire school community with
              certificates, awards, rankings and national appreciation for excellence in AI literacy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {recognitionCategories.map(({ emoji, label }) => (
                <div key={label} className="rounded-2xl bg-white/80 p-6 shadow-sm">
                  <span className="text-3xl">{emoji}</span>
                  <p className="mt-3 text-sm font-bold text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resources */}
        <div className="mt-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Resources provided
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Comprehensive Student Support</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
              Every registered student receives access to carefully designed preparation resources.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/80 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-green-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/85">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-blue-500 to-green-500 p-10 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold sm:text-3xl">Shape the Future with NAILO</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90">
              Become part of India's growing AI literacy movement and provide your students with
              opportunities to learn, compete and excel in the age of Artificial Intelligence.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:support@nailolympiad.com?subject=Partner%20School%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:scale-105"
              >
                <School className="h-4 w-4" />
                Become a Partner School
              </a>
              <a
                href="mailto:support@nailolympiad.com?subject=Contact%20Partnership%20Team"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact Partnership Team
              </a>
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        {/* <div className="mt-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Frequently Asked Questions</h3>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.03}>
                <FaqItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}