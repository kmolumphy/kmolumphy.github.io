import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-molumphy/" },
  { label: "GitHub", href: "https://github.com/kmolumphy" },
  { label: "Resume (PDF)", href: "/KevinMolumphyResume.pdf" },
  { label: "My Pups", href: "/PuppiesLaying.jpg" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            // Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            I'm always open to discussing new opportunities, engineering challenges,
            or collaborations. Whether you're looking for a lead engineer or just
            want to connect — reach out.
          </p>

          <a
            href="mailto:kmolumphy@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase rounded-sm border-glow hover:border-glow-strong transition-shadow"
          >
            kmolumphy@gmail.com
          </a>

          <div className="mt-16 flex items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border">
        <div className="container max-w-6xl px-6 py-6 flex items-center justify-between">
<p className="font-mono text-xs text-muted-foreground">
            Kevin Molumphy — Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
