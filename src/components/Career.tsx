import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Skills <span>&amp;</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Development</h4>
                <h5>Web Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Started building web apps with React.js and JavaScript. Developed
              responsive UIs using HTML, CSS and TailwindCSS. Explored Flutter
              for cross-platform mobile experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack & Backend</h4>
                <h5>Node.js · MongoDB · Express</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Expanded to full-stack development with Node.js, Express and
              MongoDB. Built scalable REST APIs, real-time applications and
              launched multiple production projects including DSR Finance Platform
              and PawToGo.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI-Focused Developer</h4>
                <h5>OpenAI · Next.js · LLMs</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Building AI-powered products using OpenAI API and HuggingFace
              models. Developed MeraAI — an AI multi-module platform with chat,
              voice and intelligent tools. Deploying cloud-native apps with Docker
              and AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
