import { Award } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const academicAdvisor = {
  name: "Akshi Kumar",
  affiliation: "Goldsmiths, University of London, UK",
  image: "/advisory/akshi.jpeg",
};

const members = [
  {
    name: "Manu Malek",
    affiliation: "Stevens Institute of Technology, USA",
    image: "/advisory/manu_malek.png",
  },
  {
    name: "Jon G. Hall",
    affiliation: "The Open University, UK",
    image: "/advisory/jon_g_hall.jpeg",
  },
  {
    name: "Francesco Piccialli",
    affiliation: "University of Naples Federico II, Italy",
    image: "/advisory/francesco_piccialli.png",
  },
  {
    name: "Sarada Prasad Gochhayat",
    affiliation: "IIT Jammu",
    image: "/advisory/sarada_prasad_gochhayat.jpeg",
  },
  {
    name: "Bhuvan Unhelkar",
    affiliation: "University of South Florida, USA",
    image: "/advisory/bhuvan_unhelkar.jpeg",
  },
  // {
  //   name: "Ajay Jaiswal",
  //   affiliation: "School of Open Learning, University of Delhi",
  //   image: "/advisory/ajay_jaiswal.jpg",
  // },
];

export function AdvisoryBoard() {
  return (
    <section id="advisory" className="relative py-16 px-5 lg:px-8 bg-gradient-to-b from-white-50 to-white">
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

        <div className="mt-14 space-y-8">
          <Reveal>
            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-7 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <img
                  src={academicAdvisor.image}
                  alt={academicAdvisor.name}
                  className="w-full max-w-[220px] aspect-square object-cover rounded-2xl shadow-md"
                />
                <div className="flex-1">
                  <div className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-700">
                    Academic Advisor
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{academicAdvisor.name}</h3>
                  <p className="mt-2 text-base font-medium text-blue-600">{academicAdvisor.affiliation}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                    Providing strategic guidance on academic rigor, innovation, and global relevance for NAILO.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <Reveal key={member.name}>
                <div className="rounded-3xl border border-blue-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-7">
                    <div className="mb-5">
                      <div className="text-base font-semibold text-blue-600">{member.name}</div>
                      <div className="text-sm text-foreground/70">{member.affiliation}</div>
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Shaping the academic integrity and global relevance of NAILO.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* <div className="mt-14 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-500 to-green-500 p-8 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 grid place-items-center text-white">
              <Award className="w-6 h-6" />
            </div> */}
            {/* <div>
              <div className="text-lg font-bold">Platform partner</div>
              <div className="text-sm text-white/90 mt-1">
                Pesofs.com is the official platform partner for NAILO's dashboard and exam delivery.
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </div>
    </section>
  );
}
