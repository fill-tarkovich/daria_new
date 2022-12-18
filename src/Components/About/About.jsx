import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div id="about">
      <div className="current">
        <p>Currently working at</p>
        <p>Accenture song</p>
        <p>ux / ui designer</p>
      </div>
      <div className="text">
        <div>
          <p>dfarzalyeva@gmail.com</p>
          <p> +358 469316160</p>
          <a
            className="link"
            href="https://www.linkedin.com/in/dariafarzalyeva/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <p>
            Hey! I am Daria, a web designer with a background in business based
            in Helsinki.
          </p>{" "}
          <p>
            I love solving problems and creating new design solutions to
            facilitate communication through various media. My main focus is
            designing web projects using a proper user experience, structured
            design, and extremely detailed execution.
            <span className="space"></span>I have a concept-driven approach to
            work and focus on thorough research. Before moving pixels around, I
            research and analyse all necessary and unnecessary information
            surrounding the job. By doing this, I can find and create unique
            concepts that are true to each specific design (and learn a lot in
            the process as well!)
          </p>
          <p>
            Thanks to my years of experience working in business field, I have
            been developing my expertise in a number of tools and methodologies
            for strategic problem solving in any industry. Some of those tools
            include:
          </p>
          <ul>
            <li>
              — Research tools: SWOT analysis, PESTLE, Interview Research,
              Journey Map;
            </li>
            <li>
              — Ideation tools: Brainstorming, Evaluation Matrix, Mindmap;
            </li>
            <li>
              — Prototyping tools: Service Prototypes, User Scenarios, User
              Stories, Experience Prototype;
            </li>
            <li>
              — Implementation tools: Business Model Canvas, Value Proposition
              Canvas, Business Plan, Service Blueprint.
            </li>
          </ul>
          <p>
            I love all things internet, and wish people cared enough for it to
            make it extraordinary — technically advanced, visually stunning,
            timeless. I love businesses, and I wish people cared enough for it —
            brave for changes, ready to go extra mile; be radical pioneers.
            <span className="space"></span>
            Currently, I am spending my 9-5’s at Accenture Song, where I have
            been fortunate enough to work with some really cool people on
            projects from various fields. Here I realised I’m planning to spend
            rest of my life working on projects that not only satisfy my curious
            itch, but also bring meaningful changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
