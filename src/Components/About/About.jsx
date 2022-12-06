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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            placerat tempor arcu porta facilisis. Etiam fermentum fringilla elit
            vitae dapibus. Sed ut vestibulum odio. Suspendisse sodales sit amet
            enim sit amet volutpat. Morbi interdum semper mollis. Donec quis
            lobortis sem. Curabitur in ex dui. Quisque viverra sem lacus, et
            pharetra risus vehicula nec. Vivamus pretium rutrum efficitur.
            Praesent rhoncus diam at metus tempus, nec dapibus felis rhoncus.{" "}
          </p>
          <p>
            Nunc vitae pretium arcu, auctor pulvinar diam. Proin cursus turpis
            at accumsan feugiat. In dolor turpis, dapibus non dolor sed, rhoncus
            bibendum sapien. Ut velit orci, condimentum sed congue in, porttitor
            eget libero. Etiam iaculis justo dapibus iaculis ornare. Etiam sed
            orci semper, gravida lacus eu, luctus sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
