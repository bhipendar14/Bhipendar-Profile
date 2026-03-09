import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              BHIPENDAR
              <br />
              <span>KUMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>An AI-focused Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>

        <div className="landing-desc">
          <p>
            Full Stack Developer passionate about building scalable web
            applications and AI-powered products using modern technologies
            like React.js/Next.js, Node.js and LLM APIs.
          </p>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;
