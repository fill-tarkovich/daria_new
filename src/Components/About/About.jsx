import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div id="about">
      <div className="current">
        <p>currently working at</p>
        <p>accenture song</p>
        <p>ux / ui designer</p>
      </div>
      <div className="text">
        <div>
          <p>dfarzalyeva@gmail.com</p>
          <p> +358 469316160</p>
        </div>
        <div>
          <p>Hey! </p>{" "}
          <p>
            I am Daria, a UI/UX designer based in Helsinki. I have an
            extraordinary sense of humor and as a child I aspired to be a
            president — my ambitions have been beyond great since day one.
          </p>{" "}
          <p>
            Currently, I am spending my 9-5’s at Accenture Song, where I have
            been fortunate enough to work with some really cool people on
            projects from various fields. Here I realized I’m planning to spend
            rest of my life working on projects that not only satisfy my curious
            itch, but also bring meaningful changes.{" "}
          </p>{" "}
          <p>
            {" "}
            I love all things internet, and wish people cared enough for it to
            make it extraordinary — technically advanced, visually stunning,
            timeless. I love businesses, and I wish people cared enough for it —
            brave for changes, ready to go extra mile. Be radical pioneers.{" "}
          </p>{" "}
          <p>
            {" "}
            I have a concept-driven approach to work and focus on thorough
            research. Before moving pixels around, I research and analyse all
            necessary and unnecessary information surrounding the job. By doing
            this, I can find and create unique concepts that are true to each
            specific design (and learn a lot in the process as well!)
          </p>
        </div>
        <div>
          <p>
            I love solving problems and creating new design solutions to
            facilitate the communication of people through various media,
            creating new visual languages. My main focus is designing web
            projects and tools using a proper user experience, structured
            design, and extremely detailed execution.
          </p>
          <p>
            Thanks to my years of experience working in business field, I have
            been developing my expertise in a number of tools and methodologies
            for strategic problem solving in any industry. Some of those tools
            include:
          </p>
          <ol>
            <li>
              {" "}
              research tools: SWOT analysis, PESTLE, Interview Research, Journey
              Map;
            </li>
            <li>ideation tools: Brainstorming, Evaluation Matrix, Mindmap;</li>
            <li>
              prototyping tools: Service Prototypes, User Scenarios, Uuser
              Stories, Experience Prototype;
            </li>
            <li>
              implementation tools: Business Model Canvas, Value Proposition
              Canvas, Business Plan, Service Blueprint.
            </li>
          </ol>
          <p>Tools I use for designing: Figma, Photoshop.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
