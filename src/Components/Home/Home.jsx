import About from "../About/About";
import Case from "../Case/Case";
import kinofolk from "../../img/kinfolk@2x.jpg";
import wemake from "../../img/wemake@2x.jpg";
import haruki from "../../img/haruki@2x.jpg";
import peikko from "../../img/peikko@2x.jpg";
import peikko1 from "../../img/peikko1@2x.png";
import peikko2 from "../../img/peikko2@2x.png";
import peikko3 from "../../img/peikko3@2x.png";
import peikko4 from "../../img/peikko4@2x.png";
import peikko5 from "../../img/peikko5@2x.png";
import peikko6 from "../../img/peikko6@2x.png";
import peikko7 from "../../img/peikko7@2x.png";
import peikko8 from "../../img/peikko8@2x.png";
import peikko9 from "../../img/peikko9@2x.png";
import peikko10 from "../../img/peikko10@2x.png";
import peikko_main from "../../img/peikko_main@2x.jpg";
import annoushka from "../../img/annoushka@2x.jpg";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div id="projects">
        <Case
          title="modules"
          category1="web"
          category2="editorial"
          date="november 2022"
          description="this project has been done as a part of an intensive, 2 days long course on the topic of modular longreads. the scope of work has been 4 pages: main, catalogue, authors page and an article."
          color="#DDFFF7"
          image={kinofolk}
        />
        <Case
          title="we make"
          category1="web"
          category2="agency"
          date="september 2022"
          description="we make is a creative agency based in antwerp, belgium."
          color="#89A6FB"
          image={wemake}
        />
        <Case
          title="haruki"
          category1="web"
          category2="landing"
          date="may 2022"
          description="haruki residence is a premium-class residential complex in an ecologically clear area of moscow with spacious apartments, developed infrustructure and managed gardens."
          color="#E5A9A9"
          image={haruki}
        />
        <Case
          title="peikko"
          category1="web"
          category2="corporate"
          date="december 2021"
          description="peikko group corporation is a leading global supplier of slim floor structures, wind energy applications and connection technology for precast and cast-in-situ construction. peikko’s innovative solutions offer a faster, safer, and more efficient way to design and build."
          color="#FFD166"
          image={peikko}
          tags={["services", "ux/ui design", "stationary", "branding"]}
          img_main={peikko_main}
          text1="brief of the project focused around applying relevance and enhancing company’s features. the aim has been to generate a strong digital strategy with understanding the set of characteristics that made peikko unique and competitive on the market."
          img1={peikko1}
          img2={peikko2}
          img3={peikko3}
          img4={peikko4}
          img5={peikko5}
          img6={peikko6}
          text2="analysis of peikko’s branding and digital presence came first. deeper understanding of current situation has helped in identifying core problems and gaps that can be worked on and changed during redesign process."
          text3="after examining client’s and user’s needs, it has been decided to change information architecture of the website and give company’s brand fresh twist preserving already set legacy."
          img7={peikko7}
          img8={peikko8}
          img9={peikko9}
          text4="font has been changed to neue haas grotesk with active usage of bold style to create a sense of heavier appearance, since peikko stands being worlds forerunners. logo of the brand has been simplified, keeping just company’s name, its most recognisable attribute. "
          text5="colour palette has been changed and reduced to smaller amount. blue and its variations are creating a feeling of stability and safety. instead of active usage, it has been suggested to use colours for details and attention to avoid clutter."
          img10={peikko10}
          text6="peikko is a great example of a company respecting its clients, their needs and time. it’s been a great pleasure to work with good component management; starting from analysis and decluttering, setting limitations and defining scope of work first, only then going in for creating new system and actual redesign process. all of it helped creating consistent design quality."
        />
        <Case
          title="annoushka"
          category1="web"
          category2="e-comm"
          date="october 2021"
          description="annoushka jewellery aims to bring a strong female voice to the traditional world of fine jewellery, and to create pieces that elegantly adapt to the lives of the increasing number of women buying jewellery for themselves."
          color="#8BB8A8"
          image={annoushka}
        />
      </div>
      <About />
    </div>
  );
};

export default Home;
