import { ArrowRight, Trophy } from "lucide-react";

const AwardCTA = () => {
  return (
    
<div className="mx-auto mt-12 my-20 max-w-5xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-green-50 shadow-lg">
  <div className="flex flex-col items-center gap-6 p-8 text-center lg:p-12">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg">
      <Trophy className="h-8 w-8" />
    </div>

    <div>
      <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
        Grand Finale • March 2027
      </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
        Compete. Excel.{" "}
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Get National Recognition.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        The <strong>National AI Literacy Olympiad (NAILO) 2026–27</strong> will
        culminate in a prestigious{" "}
        <strong>Awards & Recognition Ceremony</strong>, held during the{" "}
        <strong>AI Conclave in March 2027</strong>, where outstanding students
        from across India will be honoured for their achievements in AI.
      </p>
    </div>

    <a
      href="/awards"
      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-green-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      Explore Awards & Recognition
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  </div>
</div>
  )
}

export default AwardCTA
