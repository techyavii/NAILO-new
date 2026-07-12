import { Reveal, SectionHeader } from "./shared";
import {
  Trophy,
  Medal,
  Star,
  Award,
  Crown,
  School,
  UserRound,
  Users,
  Sparkles,
  CalendarDays,
  MapPin,
  GraduationCap,
  MessageCircle,
  TrendingUp,
  Handshake,
  Lightbulb,
} from "lucide-react";

export function Awards() {
  const juniorPrizes = [
  {
    rank: "National Topper (Rank 1)",
    prize: "₹30,000",
    awards: "National Winner's Trophy + Gold Medal",
  },
  {
    rank: "Rank 2",
    prize: "₹20,000",
    awards: "Silver Medal",
  },
  {
    rank: "Rank 3",
    prize: "₹10,000",
    awards: "Bronze Medal",
  },
  {
    rank: "Rank 4-10",
    prize: "₹3,000",
    awards: "Merit & Appreciation Certificate",
  },
  {
    rank: "Top 10%",
    prize: "—",
    awards: "Merit & Appreciation Certificates",
  },
];
  const seniorPrizes = [
  {
    rank: "National Topper (Rank 1)",
    prize: "₹1,00,000+",
    awards: "National Winner's Trophy + Gold Medal",
  },
  {
    rank: "Rank 2",
    prize: "₹50,000",
    awards: "Silver Medal",
  },
  {
    rank: "Rank 3",
    prize: "₹25,000",
    awards: "Bronze Medal",
  },
  {
    rank: "Rank 4-10",
    prize: "₹5,000",
    awards: "Merit & Appreciation Certificate",
  },
  {
    rank: "Top 10%",
    prize: "—",
    awards: "Merit & Appreciation Certificates",
  },
];

 const prestigeAwards = [
  {
    title: "National Olympiad Excellence School Award",
    description:
      "Presented to schools demonstrating exceptional student performance at the national level.",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bg: "bg-amber-50",
  },
  {
    title: "Best School Participation Award",
    description:
      "Recognizes schools with outstanding student participation and engagement rates.",
    icon: Medal,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    title: "Outstanding Academic Excellence Award",
    description:
      "For schools producing top-ranked students in state and national standings.",
    icon: Star,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Visionary Principal Award",
    description:
      "Celebrates school heads who champion AI literacy and future-ready education.",
    icon: UserRound,
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    title: "Excellence in School Coordination Award",
    description:
      "Honours NAILO School Ambassadors who lead exceptional NAILO implementation within their schools.",
    icon: Users,
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
  },
];

  const honoureeCategories = [
    {
      title: "Meritorious Students",
      icon: Trophy,
      color: "from-amber-500 to-yellow-500",
      items: ["National Toppers", "Rank Holders", "Top 10% Students"],
    },
    {
      title: "NAILO Partner Schools",
      icon: School,
      color: "from-blue-500 to-indigo-600",
      items: [
        "National Olympiad Excellence School Award",
        "Best School Participation Award",
        "Outstanding Academic Excellence Award",
      ],
    },
    {
      title: "School Leaders & Educators",
      icon: GraduationCap,
      color: "from-violet-500 to-purple-600",
      items: ["Visionary Principal Award", "Outstanding Institutional Coordinator Award"],
    },
  ];

  const whyAttend = [
    {
      text: "Interact with leading AI experts, researchers, and industry professionals.",
      icon: MessageCircle,
      color: "from-blue-500 to-indigo-500",
    },
    {
      text: "Explore emerging trends in Artificial Intelligence and Education.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
    },
    {
      text: "Celebrate innovation and academic excellence on a national platform.",
      icon: Trophy,
      color: "from-amber-500 to-yellow-500",
    },
    {
      text: "Network with schools and educators driving AI literacy across India.",
      icon: Handshake,
      color: "from-violet-500 to-purple-500",
    },
    {
      text: "Inspire students to become future-ready innovators and responsible AI citizens.",
      icon: Lightbulb,
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="awards" className="relative py-20 lg:py-2 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-soft blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Awards & recognition"
          title={
            <>
              Rewards that <span className="text-gradient">Match The Ambition</span>
            </>
          }
          description="Cash prizes, medals, certificates and national recognition that stays for life."
        />

        {/* AI Conclave 2027 — Ceremony Banner */}
        <Reveal delay={0.05}>
          <div className="mt-10 relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 via-white to-blue-50 border border-amber-200 p-8 lg:p-10 shadow-soft">
            <div className="relative grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Awards & Recognition Ceremony
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground leading-tight">
                  Held Offline at the <span className="text-gradient">AI Conclave 2027</span>
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base mt-4 leading-relaxed max-w-2xl">
                  The National AI Literacy Olympiad (NAILO) 2026–27 will culminate in a prestigious Awards &
                  Recognition Ceremony, to be held offline during the AI Conclave in March 2027 — bringing
                  together distinguished educators, industry leaders, AI experts, school representatives,
                  parents, and students from across the country to recognize outstanding achievements in AI
                  literacy and future-ready education.
                </p>

                {/* Event detail chips */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border shadow-soft">
                    <CalendarDays className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-foreground font-semibold">March 2027</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border shadow-soft">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-foreground font-semibold">Offline • Venue to be announced</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-border shadow-soft">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-foreground font-semibold">AI Conclave 2027</span>
                  </div>
                </div>
              </div>

              {/* Trophy visual */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 border border-amber-200 grid place-items-center">
                  <Trophy className="w-20 h-20 text-amber-500" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Who Will Be Honoured — quick recap */}
        <Reveal delay={0.1}>
          <div className="mt-8">
            <p className="text-center text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6">
              Who Will Be Honoured
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {honoureeCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={i}
                    className="rounded-3xl border border-border bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} grid place-items-center shadow-sm mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-base mb-3">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Star className="w-3.5 h-3.5 mt-0.5 text-amber-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Senior Division */}
        <Reveal delay={0.15}>
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-900 mb-6 shadow-sm">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Senior Division • Classes 9<sup>th</sup> – 12<sup>th</sup>
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-green-300">
                      <th className="text-left py-3 px-4 font-bold text-green-900">Position</th>
                      <th className="text-left py-3 px-4 font-bold text-green-900">Cash Prize</th>
                      <th className="text-left py-3 px-4 font-bold text-green-900">Awards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seniorPrizes.map((prize, i) => (
                      <tr key={i} className="border-b border-green-200 hover:bg-green-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-green-900">{prize.rank}</td>
                        <td className="py-3 px-4 font-bold text-lg text-green-700">{prize.prize}</td>
                        <td className="py-3 px-4 text-green-800">{prize.awards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Junior Division */}
        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-900 mb-6 shadow-sm">
              <Medal className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Junior Division • Classes 6<sup>th</sup> – 8<sup>th</sup>
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-300">
                      <th className="text-left py-3 px-4 font-bold text-blue-900">Position</th>
                      <th className="text-left py-3 px-4 font-bold text-blue-900">Cash Prize</th>
                      <th className="text-left py-3 px-4 font-bold text-blue-900">Awards</th>
                    </tr>
                  </thead>
                  <tbody>
                    {juniorPrizes.map((prize, i) => (
                      <tr key={i} className="border-b border-blue-200 hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-blue-900">{prize.rank}</td>
                        <td className="py-3 px-4 font-bold text-lg text-blue-700">{prize.prize}</td>
                        <td className="py-3 px-4 text-blue-800">{prize.awards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Digital Certificate */}
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl bg-white border border-border p-6 shadow-soft flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-soft shrink-0">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="font-bold text-lg">All Participants</div>
            <p className="text-sm text-muted-foreground mt-1">
              Every registered participant receives an Official Digital Certificate of Participation.
            </p>
          </div>
        </Reveal>

        {/* Prestige Awards */}
        <Reveal delay={0.25}>
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold text-blue-900 mb-6">
              <Crown className="w-4 h-4" /> Prestige Award Categories
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {prestigeAwards.map((award, i) => {
                const Icon = award.icon;

                return (
                  <div
                    key={i}
                    className="relative rounded-3xl border border-border bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${award.bg} grid place-items-center shrink-0`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${award.color} grid place-items-center`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold leading-tight text-base">
                          {award.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mt-2 leading-6">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Why Attend the AI Conclave 2027 */}
        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-sm font-semibold text-amber-900 mb-6">
              <Sparkles className="w-4 h-4" /> Why Attend the AI Conclave 2027
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {whyAttend.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-white p-5 shadow-soft hover:-translate-y-1 hover:shadow-lg transition-all text-center"
                  >
                    <div
                      className={`w-11 h-11 mx-auto rounded-xl bg-gradient-to-br ${reason.color} grid place-items-center shadow-sm mb-3`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-6">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Closing tagline */}
        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl bg-gradient-soft border border-border p-8 text-center shadow-soft">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Awards & Recognition Ceremony will be one of the highlights of the AI Conclave, celebrating
              the remarkable accomplishments of students, educators, principals, and partner schools who have
              demonstrated excellence in AI literacy and innovation.
            </p>
            <p className="mt-4 text-lg font-extrabold text-gradient">
              Join Us As We Honour The Champions Shaping The Future Of Artificial Intelligence Education In India
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}