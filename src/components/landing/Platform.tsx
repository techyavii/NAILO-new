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
  { icon: LayoutDashboard, title: "Student dashboard", desc: "Personalised home for exam dashboard, results and resources." },
  { icon: ShieldCheck, title: "Secure exams", desc: "Proctored, encrypted and tamper-resistant by design." },
  { icon: LineChart, title: "Analytics", desc: "AI breakdown of accuracy, timing and concept gaps." },
  { icon: Award, title: "Certificates", desc: "Verifiable digital certificates issued instantly." },
  { icon: Globe2, title: "Online portal", desc: "Accessible from any device, anywhere in India." },
  { icon: FileBarChart2, title: "Performance reports", desc: "Shareable reports for parents, schools and mentors." },
];

export function Platform() {
  const colors = [
    { bg: "bg-blue-50", border: "border-blue-300", icon: "from-blue-500 to-blue-600" },
    { bg: "bg-green-50", border: "border-green-300", icon: "from-green-500 to-green-600" },
    { bg: "bg-purple-50", border: "border-purple-300", icon: "from-purple-500 to-purple-600" },
    { bg: "bg-yellow-50", border: "border-yellow-300", icon: "from-yellow-500 to-yellow-600" },
    { bg: "bg-pink-50", border: "border-pink-300", icon: "from-pink-500 to-pink-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", icon: "from-indigo-500 to-indigo-600" },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-5 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Platform features"
          title={
            <>
              Built like the best <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">SaaS products</span>, designed for students.
            </>
          }
          description="A modern learning surface — fast, secure and beautifully simple."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((f, i) => {
            const col = colors[i];
            return (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className={`group h-full rounded-3xl border-2 p-8 ${col.bg} ${col.border} hover:shadow-lg hover:-translate-y-2 transition-all`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${col.icon} grid place-items-center shadow-lg group-hover:scale-110 transition-transform mb-5`}>
                    <f.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-foreground mb-3">{f.title}</div>
                  <p className="text-base text-foreground/80 font-medium leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* <div className="mt-14 rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 mb-4">
            Platform partner
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="rounded-3xl bg-blue-50 p-6 border border-blue-100 flex items-center justify-center shrink-0">
              <img src="/partner.webp" alt="Pesofs.com" className="h-16 object-contain" />
            </div>
            <p className="text-base text-foreground/80 font-medium max-w-3xl">
              Pesofs.com powers the NAILO dashboard and online exam delivery, providing secure, reliable platform infrastructure for student assessment.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
