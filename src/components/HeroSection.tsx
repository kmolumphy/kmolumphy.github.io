import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/KevinHeadshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <img
            src={headshot}
            alt="Kevin Molumphy"
            className="w-28 h-28 rounded-full object-cover border-2 border-primary"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          Lead Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8"
        >
          Kevin
          <br />
          <span className="gradient-text">Molumphy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Building high-performance, memory-efficient systems. From game development and design to robotics to financial tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-8"
        >
          <a href="#projects" className="group flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase hover:text-glow transition-all">
            View Projects
          </a>
          <a href="#contact" className="flex items-center gap-2 text-muted-foreground font-mono text-sm tracking-wider uppercase hover:text-foreground transition-colors">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default HeroSection;
