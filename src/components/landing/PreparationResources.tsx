import { Download, CheckCircle, BookOpen } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const resources = [
  { title: "Question Bank", icon: "📚" },
  { title: "Student Olympiad preparation guide (Study Material)", icon: "📖" },
  { title: "AI Basics e-guide", icon: "🤖" },
  { title: "Parent's Handbook", icon: "👨‍👩‍👧" },
  { title: "School Ambassador guide (For Partner Schools)", icon: "🎓" },
];

export function PreparationResources() {
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/NAILO Brochure.pdf";
    link.download = "NAILO Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 lg:py-32 px-5 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <SectionHeader
                eyebrow="Study Support"
                title={
                  <>
                    Free Resources Included With<br />
                    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Registration for Preparation</span>
                  </>
                }
                description="Everything you need to prepare for the NAILO Olympiad"
                className="mb-8 text-left"
              />

              <div className="space-y-4 mb-10">
                {resources.map((resource, index) => (
                  <Reveal key={resource.title} delay={index * 0.08}>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                      <div className="text-2xl mt-1 flex-shrink-0">{resource.icon}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-base">{resource.title}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.4}>
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-6 h-6" />
                  Download Brochure (PDF)
                </button>
              </Reveal>
            </div>

            {/* Right side - Visual */}
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 rounded-3xl blur-3xl opacity-30" />
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-blue-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Comprehensive Learning</p>
                        <p className="text-sm text-gray-600">Curated study materials</p>
                      </div>
                    </div>

                    <div className="h-1 bg-gradient-to-r from-blue-200 to-green-200 rounded-full" />

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">5+</p>
                        <p className="text-xs text-gray-600">Resources</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">∞</p>
                        <p className="text-xs text-gray-600">Practice</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-purple-600">100%</p>
                        <p className="text-xs text-gray-600">Free</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 text-center italic">
                      Start your preparation journey today with our expert-curated resources!
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
