import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import puppiesLaying from "@/assets/PuppiesLaying.jpg";

const PupsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pups" className="py-32 relative" ref={ref}>
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            // My Pups
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Molly & <span className="gradient-text">Maisie</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <img
            src={puppiesLaying}
            alt="Molly and Maisie laying down"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-secondary-foreground leading-relaxed text-lg"
        >
          Meet my pups, Molly and Maisie.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default PupsSection;
