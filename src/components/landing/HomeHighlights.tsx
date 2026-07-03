import { Brain, BookOpenCheck, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const nepHighlights = [
  {
    icon: Brain,
    title: "Digital Literacy",
    contributes: "Introduces AI fundamentals, data literacy, and responsible technology use.",
    impact: "Builds AI awareness and digital competence.",
  },
  {
    icon: BookOpenCheck,
    title: "Critical Thinking & Problem Solving",
    contributes: "Uses scenario-based and application-oriented questions.",
    impact: "Enhances analytical and decision-making skills.",
  },
  {
    icon: Sparkles,
    title: "Experiential Learning",
    contributes: "Focuses on real-world AI applications and practical understanding.",
    impact: "Promotes learning by doing.",
  },
  {
    icon: GraduationCap,
    title: "21st-Century Skills",
    contributes: "Develops creativity, communication, collaboration, and computational thinking.",
    impact: "Prepares students for future careers.",
  },
  {
    icon: BookOpenCheck,
    title: "Multidisciplinary Learning",
    contributes: "Demonstrates AI applications across healthcare, education, agriculture, business, and sustainability.",
    impact: "Encourages holistic and cross-disciplinary thinking.",
  },
  {
    icon: Sparkles,
    title: "Innovation & Research",
    contributes: "Exposes students to emerging technologies and innovation challenges.",
    impact: "Fosters curiosity, research aptitude, and entrepreneurship.",
  },
  {
    icon: Brain,
    title: "Ethics & Responsible Citizenship",
    contributes: "Covers AI ethics, privacy, bias, and responsible AI use.",
    impact: "Develops ethical and responsible digital citizens.",
  },
  {
    icon: BookOpenCheck,
    title: "Equity & Inclusion",
    contributes: "Provides nationwide access to AI literacy opportunities.",
    impact: "Expands participation across diverse learner groups.",
  },
  {
    icon: GraduationCap,
    title: "Career Readiness",
    contributes: "Introduces AI-related careers and future workforce skills.",
    impact: "Supports informed career planning and skill development.",
  },
  {
    icon: Sparkles,
    title: "Technology Integration",
    contributes: "Encourages meaningful use of AI and digital tools in education.",
    impact: "Enhances technology adoption and readiness.",
  },
  {
    icon: Brain,
    title: "Lifelong Learning",
    contributes: "Promotes continuous learning and adaptability to technological change.",
    impact: "Cultivates a growth mindset and future readiness.",
  },
];

export function HomeHighlights() {
  return (
    <section className="relative py-20 lg:py-28 px-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="NEP 2020 Alignment"
          title={
            <>
              How NAILO aligns with <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">NEP 2020</span>
            </>
          }
          description="Transforming NEP goals into practical AI literacy outcomes for students across India."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[700px] divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/90">NEP Goal</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/90">How NAILO Contributes</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-foreground/90">Student Impact</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {nepHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <tr key={item.title} className="align-top">
                    <td className="py-4 px-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-green-500 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-foreground/75">{item.contributes}</td>
                    <td className="py-4 px-4 text-sm text-foreground/75">{item.impact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-green-50 p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Key Outcome</p>
                <h6 className="mt-2 text-2xl sm:text-xl text-foreground">
                  NAILO transforms NEP 2020's vision into action by equipping students with AI literacy, critical thinking, ethical awareness, innovation skills, and future workforce competencies essential for India's digital future.
                </h6>
              </div>
              <a
                href="/partner-schools"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 w-lg"
              >
                Explore Partner Schools
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
