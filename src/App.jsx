import "./styles/App.scss";
import Header from "./Components/Header/Header";
import Case from "./Components/Case/Case";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="projects">
        <Case
          title="modules"
          category="web / editorial"
          date="november 2022"
          description="this project has been done as a part of an intensive, 2 days long course on the topic of modular longreads. the scope of work has been 4 pages: main, catalogue, authors page and an article."
          color="#DDFFF7"
        />
        <Case
          title="we make"
          category="web / agency"
          date="september 2022"
          description="we make is a creative agency based in antwerp, belgium."
          color="#89A6FB"
        />
        <Case
          title="haruki"
          category="web / landing"
          date="may 2022"
          description="haruki residence is a premium-class residential complex in an ecologically clear area of moscow with spacious apartments, developed infrustructure and managed gardens."
          color="#E5A9A9"
        />
        <Case
          title="peikko"
          category="web / corporate"
          date="december 2021"
          description="peikko group corporation is a leading global supplier of slim floor structures, wind energy applications and connection technology for precast and cast-in-situ construction. peikko’s innovative solutions offer a faster, safer, and more efficient way to design and build."
          color="#FFD166"
        />
        <Case
          title="annoushka"
          category="web / e-comm"
          date="october 2021"
          description="annoushka jewellery aims to bring a strong female voice to the traditional world of fine jewellery, and to create pieces that elegantly adapt to the lives of the increasing number of women buying jewellery for themselves."
          color="#8BB8A8"
        />
      </div>
      <About />
    </div>
  );
}

export default App;
