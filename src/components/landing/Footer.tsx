import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const cols = [
  {
    title: "Olympiad",
    links: ["About NAILO", "Syllabus", "Exam Structure", "Awards & Recognition", "Important Dates"],
  },
  {
    title: "Students",
    links: ["Register", "Study Resources", "Sample Papers", "Results", "Dashboard"],
  },
  {
    title: "Schools",
    links: ["School Partnership", "Bulk Registration", "Educator Resources"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-white to-blue-50 border-t-2 border-blue-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <img 
                    src="/NAILO_LOGO.png" 
                    alt="NAILO" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="text-lg font-bold text-foreground mt-2">NAILO</div>
                <div className="text-sm text-foreground/70 mt-1 font-medium">
                  National AI Literacy Olympiad
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-foreground/60 mb-2 font-semibold">Organized by</div>
                <img 
                  src="/AFI_EDUTECH_LOGO.jpeg" 
                  alt="AFI EduTech" 
                  className="h-8 w-auto ml-auto"
                />
              </div>
            </div>
            <p className="mt-6 text-base text-foreground/75 max-w-sm font-medium leading-relaxed">
              India's national-level assessment for computational thinking and
              artificial intelligence literacy. An AFI EduTech initiative under
              AI for India.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:support@nailolympiad.com" className="hover:text-blue-600 transition-colors font-medium">support@nailolympiad.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">AFI EduTech, New Delhi, India</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:shadow-lg grid place-items-center transition-all hover:scale-110 text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 lg:gap-12">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-lg font-bold text-foreground mb-5">{c.title}</div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-base text-foreground/75 hover:text-blue-600 transition-colors font-medium"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t-2 border-blue-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <div className="text-foreground/70 font-medium">
            © {new Date().getFullYear()} NAILO · AFI EduTech. All rights reserved.
          </div>
          <div className="flex gap-6 font-medium">
            <a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a href="#" className="text-foreground/70 hover:text-blue-600 transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
