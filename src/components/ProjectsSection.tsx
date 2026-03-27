import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/MountainKeep_1.png";
import project2 from "@/assets/FollowMe.png";
import project3 from "@/assets/BlackScholes.png";

const projects = [
  {
    title: "DreamWorld",
    role: "Lead Software Engineer",
    year: "2022–Present",
    description:
      "Custom C++ multiplayer MMO built on Unreal Engine 5. Responsible for gameplay systems across animation, physics, combat, AI, and optimization. Managed 10+ engineers and built fullstack investor dashboards with AWS and Power BI.",
    tags: ["C++", "Unreal Engine 5", "AWS", "Python"],
    image: project1,
    link: "https://www.playdreamworld.com/",
  },
  {
    title: "Autonomous Robot",
    role: "Senior Design Project",
    year: "2022",
    description:
      "Mobile cooperative robot for an industrial kitchen environment. Implemented a full 'Follow the Leader' mode in ROS architecture. Achieved positioning accuracy within 5cm using Pozyx devices. Awarded Best in Session by a panel of professional judges.",
    tags: ["ROS", "C", "Python", "Arduino", "Pozyx"],
    image: project2,
    link: "https://github.com/kmolumphy/RSL_SeniorDesign",
  },
  {
    title: "Black-Scholes Model Visualizer",
    role: "Personal Project",
    year: "2025",
    description:
      "Real-time Black-Scholes options pricing engine with interactive heatmap visualization. Pulls live stock prices and calculates yearly volatility using the yFinance API.",
    tags: ["Python", "Streamlit", "yFinance"],
    image: project3,
    link: "https://github.com/kmolumphy/BlackScholes",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`overflow-hidden rounded-lg border border-border group-hover:border-glow transition-shadow block ${index % 2 === 1 ? "md:order-2" : ""}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </a>

      {/* Info */}
      <div className={index % 2 === 1 ? "md:order-1 md:text-right" : ""}>
        <div className={`flex items-center gap-3 mb-3 font-mono text-xs tracking-wider ${index % 2 === 1 ? "md:justify-end" : ""}`}>
          <span className="text-primary">{project.role}</span>
          <span className="text-muted-foreground">— {project.year}</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-secondary-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-sm border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-mono text-xs tracking-wider uppercase text-primary hover:text-glow transition-all flex items-center gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}
        >
          <span className="w-6 h-px bg-primary" />
          View Project
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            // Selected Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-line" />
    </section>
  );
};

export default ProjectsSection;
