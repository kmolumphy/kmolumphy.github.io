import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container max-w-6xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">
          KM<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
