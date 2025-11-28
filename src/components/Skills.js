import iconCpp from "../assets/img/C++.png";
import iconPython from "../assets/img/python.png";
import iconGithub from "../assets/img/github.png";
import iconHtml from "../assets/img/html.png";
import iconCss from "../assets/img/css3.png";
import iconJs from "../assets/img/javascript.png";
import sunnyMist from "../assets/img/sunnyMist.png";
import { useEffect, useState, useRef } from "react";

export const Skills = () => {
  // Ref for the section to observe visibility
  const sectionRef = useRef(null);
  // State to track if the animation should run (true after first entry)
  const [hasEntered, setHasEntered] = useState(false);

  // Parallax effect for the mist (kept the original logic)
  useEffect(() => {
    const mist = document.querySelector(".skill-mist");

    const handleScroll = () => {
      // Check if the element exists before trying to access its style
      if (mist) {
        const offset = window.scrollY * 0.08; // adjust depth here
        // The animation will keep running on every scroll, up or down
        mist.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for the one-time entry animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger if the section is intersecting AND it hasn't entered before
        // `entry.boundingClientRect.top` is used to check scroll direction
        if (
          entry.isIntersecting &&
          !hasEntered &&
          entry.boundingClientRect.top > 0
        ) {
          setHasEntered(true);
          // Disconnect observer after it runs once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport as root
        rootMargin: "0px",
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasEntered]);

  const skills = [
    { id: 1, name: "C++", icon: iconCpp, delay: 0.1, duration: 1.2 },
    {
      id: 2,
      name: "Python (scripting)",
      icon: iconPython,
      delay: 0.3,
      duration: 1.0,
    },
    { id: 3, name: "GitHub", icon: iconGithub, delay: 0.5, duration: 1.4 },
    { id: 4, name: "HTML", icon: iconHtml, delay: 0.2, duration: 0.9 },
    { id: 5, name: "CSS3", icon: iconCss, delay: 0.4, duration: 1.3 },
    { id: 6, name: "JavaScript", icon: iconJs, delay: 0.6, duration: 1.1 },
  ];

  return (
    <section
      className="skill"
      id="skills"
      aria-label="Skills section"
      ref={sectionRef} // Attach ref here
    >
      {/* Keeping the mist image for the ambient effect */}
      <img src={sunnyMist} alt="morning mist" className="skill-mist" />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are some of my main technical skills. For the full list and
                details, view my resume below.
              </p>

              <div className="skills-grid" role="list">
                {skills.map((s) => (
                  <div
                    className={`skill-card ${hasEntered ? "animate" : ""}`}
                    role="listitem"
                    key={s.id}
                    // Apply inline styles for variable animation
                    style={{
                      "--animation-delay": `${s.delay}s`,
                      "--animation-duration": `${s.duration}s`,
                    }}
                  >
                    <div className="skill-icon-wrapper">
                      <img
                        src={s.icon}
                        alt={`${s.name} icon`}
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-name">{s.name}</div>
                  </div>
                ))}
              </div>

              <div className="skill-cta">
                <a
                  className="btn-resume"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
