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
    prize: "₹1,00,000",
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
    title: "Outstanding Institutional Coordinator Award",
    description:
      "Honours coordinators who lead exceptional NAILO implementation within their schools.",
    icon: Users,
    color: "from-cyan-500 to-teal-600",
    bg: "bg-cyan-50",
  },
];

  return (
    <section id="awards" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-soft blur-3xl opacity-70" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Awards & recognition"
          title={
            <>
              Rewards that <span className="text-gradient">match the ambition</span>
            </>
          }
          description="Cash prizes, medals, certificates and national recognition that stays for life."
        />

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

        {/* Senior Division */}
        <Reveal delay={0.15}>
          <div className="mt-8">
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
      </div>
    </section>
  );
}
