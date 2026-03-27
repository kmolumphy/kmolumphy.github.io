import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years as Lead Engineer" },
  { value: "10+", label: "Direct Reports Mentored" },
  { value: "3", label: "Featured Projects" },
];

const skills = [
  "C / C++",
  "Python",
  "Unreal Engine 5",
  "ROS",
  "AWS",
  "Streamlit",
  "NumPy / Pandas",
  "Power BI",
  "Git",
  "Linux",
  "Java",
  "Go",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left column */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              // About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Building <span className="gradient-text">performant</span> systems
            </h2>
            <div className="space-y-5 text-secondary-foreground leading-relaxed">
              <p>
                I'm a Lead Software Engineer with strong C/C++ and Python expertise,
                specializing in high-performance, memory-efficient systems and complex
                architectures. Currently at DreamWorld, building a custom C++ multiplayer
                MMO engine on Unreal Engine 5.
              </p>
              <p>
                I've owned gameplay systems across animation, physics, combat, AI, and
                optimization — while managing and mentoring 10+ junior developers. I've
                also led team-wide AI tool integration and built fullstack investor dashboards
                using AWS, Python, and Power BI.
              </p>
              <p>
                B.S. in Computer Science & Engineering from Santa Clara University,
                with concentrations in AI & Algorithms. My background spans game
                development, robotics, machine learning, and financial modeling.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border p-5 rounded-lg hover:border-glow transition-shadow"
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 font-mono">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary border border-border rounded-sm text-secondary-foreground hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default AboutSection;
