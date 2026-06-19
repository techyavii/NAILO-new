import { Users, Globe2, Award } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const members = [
  {
    name: "Manu Malek",
    affiliation: "Stevens Institute of Technology, USA",
  },
  {
    name: "Jon G. Hall",
    affiliation: "The Open University, UK",
  },
  {
    name: "Francesco Piccialli",
    affiliation: "University of Naples Federico II, Italy",
  },
  {
    name: "Sarada Prasad Gochhayat",
    affiliation: "IIT Jammu",
  },
  {
    name: "Bhuvan Unhelkar",
    affiliation: "University of South Florida, USA",
  },
  {
    name: "Ajay Jaiswal",
    affiliation: "School of Open Learning, University of Delhi",
  },
];

export function AdvisoryBoard() {
  return (
    <section id="advisory" className="relative py-20 lg:py-32 px-5 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Advisory board"
          title={
            <>
              Guided by global experts for a <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">world-class Olympiad</span>
            </>
          }
          description="NAILO's advisory board brings together academic leaders and AI educators from India and abroad to ensure the Olympiad stays rigorous, inclusive and future-ready."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Reveal key={member.name}>
              <div className="rounded-3xl border border-blue-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-5 text-blue-600">
                  <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-500 to-green-500 grid place-items-center text-white shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-base font-semibold">{member.name}</div>
                    <div className="text-sm text-foreground/70">{member.affiliation}</div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A distinguished advisor shaping the academic integrity and global relevance of NAILO.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-500 to-green-500 p-8 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 grid place-items-center text-white">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold">Platform partner</div>
              <div className="text-sm text-white/90 mt-1">
                Pesofs.com is the official platform partner for NAILO's dashboard and exam delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
