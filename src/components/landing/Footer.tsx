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
    links: ["About NAILO", "Syllabus", "Exam Structure", "Awards", "Important Dates"],
  },
  {
    title: "Students",
    links: ["Register", "Mock Tests", "Sample Papers", "Results", "Dashboard"],
  },
  {
    title: "Schools",
    links: ["School Partnership", "Bulk Registration", "Educator Resources", "Mentorship", "Workshops"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10 bg-foreground text-white/85">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
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
                <div className="text-sm font-bold text-white mt-2">NAILO 2026-27</div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  National AI Literacy Olympiad
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/60 mb-2">Organized by</div>
                <img 
                  src="/AFI_EDUTECH_LOGO.jpg" 
                  alt="AFI EduTech" 
                  className="h-8 w-auto ml-auto"
                />
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-sm">
              India's national-level assessment for computational thinking and
              artificial intelligence literacy. An AFI EduTech initiative under
              AI for India.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:contact@nailo.org.in" className="hover:text-white transition-colors">contact@nailo.org.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a href="mailto:support@nailolympiad.com" className="hover:text-white transition-colors">support@nailolympiad.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60" /> +91 80000 12345
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white/60" /> AFI EduTech, New Delhi, India
              </li>
            </ul>

            <div className="mt-6 flex gap-2">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-brand grid place-items-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-bold text-white">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/70 hover:text-white transition-colors"
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

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} NAILO · AFI EduTech. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
