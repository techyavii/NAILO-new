import {
  LayoutDashboard,
  ShieldCheck,
  LineChart,
  Award,
  Globe2,
  FileBarChart2,
} from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const features = [
  { icon: LayoutDashboard, title: "Student dashboard", desc: "Personalised home for tests, results and resources." },
  { icon: ShieldCheck, title: "Secure exams", desc: "Proctored, encrypted and tamper-resistant by design." },
  { icon: LineChart, title: "Analytics", desc: "AI breakdown of accuracy, timing and concept gaps." },
  { icon: Award, title: "Certificates", desc: "Verifiable digital certificates issued instantly." },
  { icon: Globe2, title: "Online portal", desc: "Accessible from any device, anywhere in India." },
  { icon: FileBarChart2, title: "Performance reports", desc: "Shareable reports for parents, schools and mentors." },
];

export function Platform() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Platform features"
          title={
            <>
              Built like the best <span className="text-gradient">SaaS products</span>, designed for students.
            </>
          }
          description="A modern learning surface — fast, secure and beautifully simple."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft group-hover:shadow-glow transition-shadow">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4 text-lg font-bold">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
