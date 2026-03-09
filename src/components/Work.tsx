import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "MeraAI",
    category: "AI Multi-Module Platform",
    tools: "Next.js · TypeScript · Node.js · MongoDB",
    description:
      "AI multi-module platform with chat, voice input and intelligent tools powered by LLM APIs.",
    image: "/images/meraai.png",
    live: "https://mera-ai-one.vercel.app/",
    github: "https://github.com/bhipendar14",
  },
  {
    title: "DSR Group Finance",
    category: "Finance Platform",
    tools: "React · Node.js · Express · MongoDB",
    description:
      "40+ page finance platform with live stock data, calculators and comprehensive financial tools.",
    image: "/images/dsr.png",
    live: "https://www.dsrgroupmandsaur.com/",
    github: "https://github.com/bhipendar14",
  },
  {
    title: "B-Market",
    category: "E-Commerce Marketplace",
    tools: "React · Node.js · MongoDB",
    description:
      "Modern marketplace platform with product listings, cart management and seamless buying experience.",
    image: "/images/bmarket.png",
    live: "https://b-market.vercel.app/",
    github: "https://github.com/bhipendar14",
  },
  {
    title: "PawToGo",
    category: "Pet Service Platform",
    tools: "MERN Stack",
    description:
      "Pet pickup service scheduling platform connecting pet owners with trusted service providers.",
    image: "/images/pawtogo.png",
    live: "https://paw-to-go.vercel.app/",
    github: "https://github.com/bhipendar14",
  },
  {
    title: "ADmyBRAND",
    category: "AI Marketing Tool",
    tools: "React · TailwindCSS",
    description:
      "AI-powered marketing tool landing page with modern UI, animations and conversion-focused design.",
    image: "/images/admybrand.png",
    live: "https://admybrand-landing-tsp6.vercel.app/",
    github: "https://github.com/bhipendar14",
  },
  {
    title: "HomeEase",
    category: "Real-Time Booking Platform",
    tools: "Node.js · Express · MongoDB",
    description:
      "Real-time home service booking platform with live availability, instant scheduling and service management.",
    image: "/images/homeease.png",
    live: "https://home-ease-8c4y.vercel.app/",
    github: "https://github.com/bhipendar14",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-desc">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link-btn carousel-link-live"
                            data-cursor="disable"
                          >
                            Live Demo <MdArrowOutward />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link-btn carousel-link-github"
                            data-cursor="disable"
                          >
                            GitHub <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
