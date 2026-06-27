import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type Page = "home" | "partners";

type NavbarProps = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
};

const links = [
  { label: "Home", page: "home" as const },
  { label: "Partner Schools", page: "partners" as const },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <button type="button" onClick={() => handleNavigate("home")} className="flex items-center gap-2 group">
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <div className="text-sm font-bold tracking-tight">NAILO</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5"></div>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <button
                type="button"
                onClick={() => handleNavigate(l.page)}
                className={`relative px-4 py-2 text-base font-semibold transition-colors group ${
                  currentPage === l.page ? "text-blue-600" : "text-foreground hover:text-blue-600"
                }`}
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-1 bg-gradient-to-r from-blue-500 to-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://rzp.io/rzp/sKBaz3gm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            🚀 Register Now ₹399
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl"
          >
            <ul className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(l.page)}
                    className={`block w-full text-left px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted ${
                      currentPage === l.page ? "text-blue-600" : "text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://rzp.io/rzp/sKBaz3gm"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-gradient-brand text-white text-sm font-semibold shadow-glow"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
