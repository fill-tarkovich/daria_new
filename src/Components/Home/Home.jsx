import About from "../About/About";
import Case from "../Case/Case";
import kinofolk from "../../img/webp/kinfolk@2x.webp";
import wemake from "../../img/webp/wemake@2x.webp";
import haruki from "../../img/webp/haruki@2x.webp";
import peikko from "../../img/webp/peikko@2x.webp";
import peikko1 from "../../img/webp/peikko1@2x.webp";
import peikko2 from "../../img/webp/peikko2@2x.webp";
import peikko3 from "../../img/webp/peikko3@2x.webp";
import peikko4 from "../../img/webp/peikko4@2x.webp";
import peikko5 from "../../img/webp/peikko5@2x.webp";
import peikko6 from "../../img/webp/peikko6@2x.webp";
import peikko7 from "../../img/webp/peikko7@2x.webp";
import peikko8 from "../../img/webp/peikko8@2x.webp";
import peikko9 from "../../img/webp/peikko9@2x.webp";
import peikko10 from "../../img/webp/peikko10@2x.webp";
import peikko_main from "../../img/webp/peikko_main@2x.webp";
import annoushka_main from "../../img/webp/annoushka_main@2x.webp";
import haruki_main from "../../img/webp/haruki_main@2x.webp";
import wemake_main from "../../img/webp/wemake_main@2x.webp";
import modules_main from "../../img/webp/modules_main@2x.webp";
import annoushka from "../../img/webp/annoushka@2x.webp";
import annoushka1 from "../../img/webp/annoushka1@2x.webp";
import annoushka2 from "../../img/webp/annoushka2@2x.webp";
import annoushka3 from "../../img/webp/annoushka3@2x.webp";
import annoushka4 from "../../img/webp/annoushka4@2x.webp";
import annoushka5 from "../../img/webp/annoushka5@2x.webp";
import annoushka6 from "../../img/webp/annoushka6@2x.webp";
import annoushka7 from "../../img/webp/annoushka7@2x.webp";
import annoushka8 from "../../img/webp/annoushka8@2x.webp";
import annoushka9 from "../../img/webp/annoushka9@2x.webp";
import annoushka10 from "../../img/webp/annoushka10@2x.webp";
import wemake1 from "../../img/webp/wemake1@2x.webp";
import wemake2 from "../../img/webp/wemake2@2x.webp";
import wemake3 from "../../img/webp/wemake3@2x.webp";
import wemake4 from "../../img/webp/wemake4@2x.webp";
import wemake5 from "../../img/webp/wemake5@2x.webp";
import wemake6 from "../../img/webp/wemake6@2x.webp";
import wemake7 from "../../img/webp/wemake7@2x.webp";
import wemake8 from "../../img/webp/wemake8@2x.webp";
import wemake9 from "../../img/webp/wemake9@2x.webp";
import wemake10 from "../../img/webp/wemake10@2x.webp";

import modules1 from "../../img/webp/modules1@2x.webp";
import modules2 from "../../img/webp/modules2@2x.webp";
import modules3 from "../../img/webp/modules3@2x.webp";
import modules4 from "../../img/webp/modules4@2x.webp";
import modules5 from "../../img/webp/modules5@2x.webp";
import modules6 from "../../img/webp/modules6@2x.webp";
import modules7 from "../../img/webp/modules7@2x.webp";
import modules8 from "../../img/webp/modules8@2x.webp";
import modules9 from "../../img/webp/modules9@2x.webp";
import modules10 from "../../img/webp/modules10@2x.webp";

import haruki1 from "../../img/webp/haruki1@2x.webp";
import haruki2 from "../../img/webp/haruki2@2x.webp";
import haruki3 from "../../img/webp/haruki3@2x.webp";
import haruki4 from "../../img/webp/haruki4@2x.webp";
import haruki5 from "../../img/webp/haruki5@2x.webp";
import haruki6 from "../../img/webp/haruki6@2x.webp";
import haruki7 from "../../img/webp/haruki7@2x.webp";
import haruki8 from "../../img/webp/haruki8@2x.webp";
import haruki9 from "../../img/webp/haruki9@2x.webp";

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
          description="This project has been done as a part of an intensive, 2 days long course on the topic of modular longreads. The scope of work has been 4 pages: main, catalogue, authors page and an article."
          color="#DDFFF7"
          image={kinofolk}
          tags={["Services", "UX/UI design"]}
          img_main={modules_main}
          text1="The aim of the course has been creating an equally engaging, seamless experience across all screen sizes, keeping functionality across devices without loosing much in the way of performance or features."
          img1={modules1}
          img2={modules2}
          img3={modules3}
          img4={modules4}
          img5={modules5}
          img6={modules6}
          text2="The course materials required usage of one specific font, Suisse Int???l, and monochromatic look. Redesign concept has been built upon Kinfolk material. Grid required to be 1920px in width. Modules were supposed to be universal for each block of website, titles and descriptions staying the same."
          text3="Firstly, atomic design approach has been applied to the process of work. Current design of Kinfolk has been carefully analysed in order to get a clear ???as-is??? picture of the site and understand what components, molecules and atoms, it uses in its information architecture. The goal was to avoid restructuring Kinfolk as much as possible, since the aim lied more in reskinning the website."
          img7={modules7}
          img8={modules8}
          img9={modules9}
          text4="To sustain editorial grid, carefully curated modules are used in mathematical, systemic grid that leaves no place for randomness or thoughtlessness. Each module comes in order. The gaps in modules exist to create an uncluttered experience for users, it helps to avoid excess of information and keep users??? attention on the content of the website without tiring readers out. Header and footer are done in sync to complement each other, this way they create a feeling of finished cycle."
          text5="It has been decided to put emphasis on prolonged lines, keeping width of photos set and letting height adjust depending on photo???s orientation. This way of module usage allows to preserve original media in a more efficient preview. Modules include all possible variants of media usage; in catalogue page colour coded rectangles are used to maintain page flow and weight. To keep the sense of stretching and add a little editorial turn, it has been decided to set text container to 60% of a module width at all times."
          img10={modules10}
          text6="Over two days, aimed agenda of the course has been achieved. Each page has been done in three breakpoints: desktop, tablet, and mobile. Modules successfully passed all the tests, and works properly on each device. This course brought me a deeper understanding of working with grids and modules, creating structured, organised ???chaos??? that is efficient to use, easy to navigate and, more importantly, achievable in code and easily maintained due to set of simple, systemic rules."
        />
        <Case
          title="we make"
          category1="web"
          category2="agency"
          date="september 2022"
          description="We make is a creative agency based in Antwerp, Belgium."
          color="#89A6FB"
          image={wemake}
          tags={["Services", "UX/UI design"]}
          img_main={wemake_main}
          text1="The brief of this project focused around the concept of ???vision??? and drive of emotive response from consumers by immersing them in ???vision??? for products and services. The goal was to create a distinctive and ownable identity that positions them as a matured creative agency offering tailored design solutions that meet their clients specific needs."
          img1={wemake1}
          img2={wemake2}
          img3={wemake3}
          img4={wemake4}
          img5={wemake5}
          img6={wemake6}
          text2="SWOT analysis has been carried out beforehand to identify key issues and strengths of We Make in a highly competitive environment. Research and analysis has helped to pinpoint aspects of the agency that has to be tailored to fit required needs of redesign and distinguish We Make from competitors."
          text3="Instead of going safe, it has been decided to go bold. This approach finds itself in typography and grid, smaller paddings that aim to create tension and strengthen horizontal line, keeping feeling of compactness intact."
          img7={wemake7}
          img8={wemake8}
          img9={wemake9}
          text4="In order to bring truly premium experience that the company offers, the brand architecture has been reviewed and brought up-to-date. Grid became more compact and thoughtful, structured. It creates a sense of modernity and ownership. New colour palette has been built upon sustainability issue and a desire to reassure maturity."
          text5="Star as a symbol of connectivity, of finding true path towards end goal. Simplicity and brevity are foundation for We Make redesign. Their work, their legacy are speaking for We Make better than anything else."
          img10={wemake10}
          text6="The vision, born at the beginning, has been beautifully curated till the end of the project. It???s been a pleasure to dive deeper into sustainability topic, into creating simple, yet complicated guidelines for a design."
        />
        <Case
          title="haruki"
          category1="web"
          category2="landing"
          date="may 2022"
          description="Haruki residence is a premium-class residential complex in an ecologically clear area of Moscow with spacious apartments, developed infrustructure and managed gardens."
          color="#E5A9A9"
          image={haruki}
          tags={["Services", "UX/UI design"]}
          img_main={haruki_main}
          text1="Brief aimed at creating an inclusive and ownable identity that positions Haruki as a premium-class residential complex offering tailored design apartments that meet their clients specific needs."
          img1={haruki1}
          img2={haruki2}
          img3={haruki3}
          img4={haruki4}
          img5={haruki5}
          img6={haruki6}
          text2="After analysis of key competitors, of common residential web projects, it has been decided to focus on perfect taste and an impeccable eye for detail. Strategy has been built around the concept of ???seeing??? products that leads to an emotive response from immersing potential clients in their vision of own home."
          text3="???A premium feel??? has been captured through beautifully distinctive and obviously ownable content, a polished structure of grid and minimalism of landing page."
          img7={haruki7}
          img8={haruki8}
          img9={haruki9}
          text4="Landing page had to be inclusive and considerable. CTAs are placed in strategically right areas of website to avoid being intrusive and haunting. They carefully weaved into storytelling."
          text5="From a design perspective, Haruki came out to be digitally-friendly and agile across all breakpoints."
          // img10={modules10}
          // text6="over two days, aimed agenda of the course has been achieved. each page has been done in three breakpoints: desktop, tablet, and mobile. modules successfully survived testing, and managed to work on each device. this course brought me a deeper understanding of working with grids and modules, creating structured, organised ???chaos??? that is efficient to use, easy to navigate and, more importantly, achievable in code and easily maintained due to set of simple, systemic rules."
        />
        <Case
          title="peikko"
          category1="web"
          category2="corporate"
          date="december 2021"
          description="Peikko group corporation is a leading global supplier of slim floor structures, wind energy applications and connection technology for precast and cast-in-situ construction. Peikko???s innovative solutions offer a faster, safer, and more efficient way to design and build."
          color="#FFD166"
          image={peikko}
          tags={["Services", "UX/UI design", "Stationary", "Branding"]}
          img_main={peikko_main}
          text1="Brief of the project focused around applying relevance and enhancing company???s features. The aim has been to generate a strong digital strategy with understanding the set of characteristics that made peikko unique and competitive on the market."
          img1={peikko1}
          img2={peikko2}
          img3={peikko3}
          img4={peikko4}
          img5={peikko5}
          img6={peikko6}
          text2="Analysis of Peikko???s branding and digital presence came first. Deeper understanding of current situation has helped in identifying core problems and gaps that can be worked on and changed during redesign process."
          text3="After examining client???s and user???s needs, it has been decided to change information architecture of the website and give company???s brand fresh twist preserving already set legacy."
          img7={peikko7}
          img8={peikko8}
          img9={peikko9}
          text4="Font has been changed to Neue Haas Grotesk with active usage of bold style to create a sense of heavier appearance, since Peikko stands being worlds forerunners. Logo of the brand has been simplified, keeping just company???s name, its most recognisable attribute. "
          text5="Colour palette has been changed and reduced to smaller amount. Blue and its variations are creating a feeling of stability and safety. Instead of active usage, it has been suggested to use colours for details and attention to avoid clutter."
          img10={peikko10}
          text6="Peikko is a great example of a company respecting its clients, their needs and time. It???s been a great pleasure to work with good component management; starting from analysis and decluttering, setting limitations and defining scope of work first, only then going in for creating new system and actual redesign process. All of it helped creating consistent design quality."
        />
        <Case
          title="annoushka"
          category1="web"
          category2="e-comm"
          date="october 2021"
          description="Annoushka jewellery aims to bring a strong female voice to the traditional world of fine jewellery and to create pieces that elegantly adapt to the lives of the increasing number of women buying jewellery for themselves."
          color="#8BB8A8"
          image={annoushka}
          tags={["Services", "UX/UI design"]}
          img_main={annoushka_main}
          text1="Main goal of the project was to understand and analyse current consumer behaviours and the behaviours of millennials and centennials. Annoushka is striving to understand how to approach younger generations."
          img1={annoushka1}
          img2={annoushka2}
          img3={annoushka3}
          img4={annoushka4}
          img5={annoushka5}
          img6={annoushka6}
          text2="SWOT and competitive analysis has been carried out at the beginning of work to understand better not only Annoushka???s brand, but also its major competitors and market environment. As a result, gathered information has helped in defining key points of improvement for Annoushka as a brand and as a business."
          text3="In order to bring truly premium experience that annoushka offers, it has been decided to change information architecture of the website and overall look of Annoushka???s website since it didn???t match neither brand identity nor desired holistic experience."
          img7={annoushka7}
          img8={annoushka8}
          img9={annoushka9}
          text4="Font has been changed to Libre Baskerville and Neue Haas Grotesk to bring out elegance and legacy Annoushka has. A lot of emphasis has been put into high-quality photos of products, storytelling and easier access to information. Priority lies within client???s convenience and usability."
          text5="Colour palette has been changed and reduced to smaller amount. Used in redesign pastel peach and grey are creating a feeling of refinement, credibility and calmness. Instead of active usage, it has been suggested to use colours for details and attention to avoid overloading the website."
          img10={annoushka10}
          text6="Project involved creating a visually driven medium for consumers to interact with the brand at an omnichannel level. The best part of the work has been creating a fresh start for Annoushka???s brand, but still preserving legacy and reputation it  has gained."
        />
      </div>
      <About />
    </div>
  );
};

export default Home;
