import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import Snapmate from "../../assets/images/snapmate_mockup.png";
import Lid from "../../assets/images/lid_mockup.jpg";
import Sirat from "../../assets/images/sirat_mockup.png";
import Ctrade from "../../assets/images/ctrade_mockup.png";

const projects = [
  {
    title: "Snapmate (All-in-One Video Downloader & Status Saver)",
    description:
      "A powerful media downloader supporting reels, shorts, and WhatsApp statuses. Overcame Android storage limitations using SAF and optimized parsing logic for seamless performance.",
    link: Snapmate,
    color: "#3498db",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tekhof.snapmate",
  },
  {
    title: "Einbürgerungstest 2025 (German Citizenship Quiz App)",
    description:
      "A fully offline citizenship exam prep app with 300+ official questions, 12+ languages, and mock tests. Achieved 250+ organic downloads in the first week.",
    link: Lid,
    color: "#DD1C1A", // German flag red color
    githubLink: "",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.tekhof.einbuergerung.test",
  },
  {
    title: "Sirat (Islamic Spiritual Companion App)",
    description:
      "All-in-one Islamic lifestyle app with Quran access, daily progress tracking, Duas, multilingual support, and personalized notifications for spiritual growth.",
    link: Sirat,
    color: "#27ae60",
    githubLink: "",
    liveLink: "https://play.google.com/store/apps/details?id=com.tekhof.sirat",
  },
  {
    title: "CTRade Logistics App (Enterprise App)",
    description:
      "Custom enterprise-grade app for CTrade Houston to manage dispatching, user roles, and logistics. Internal deployment with modular architecture.",
    link: Ctrade,
    color: "#e67e22",
    githubLink: "", // Private Repo
    liveLink: "", // Internal App
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
  const targetScale = 1 - (projects.length - i) * 0.05;

  return (
    <Card
      key={i}
      i={i}
      title={project.title}
      description={project.description}
      url={project.link}
      color={project.color}
      progress={scrollYProgress}
      range={[i * 0.25, 1]}
      targetScale={targetScale}
      githubLink={project.githubLink}
      liveLink={project.liveLink}
      totalProjects={projects.length} // 👈 add this
    />
  );
})}

        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  totalProjects,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center flex-col justify-center sticky top-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                {/* <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a> */}

                {/* Live Link */}
                {liveLink != "" ? (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Live
                    </span>
                  </motion.a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
     {/* Show arrow only if NOT the last card */}
      {i !== totalProjects - 1 && (
        <motion.div
          className="w-full flex justify-center mb-20"
          initial={{ y: 0, opacity: 0.6 }}
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70 hover:opacity-100 transition"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
