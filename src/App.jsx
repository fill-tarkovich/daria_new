import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseSingle from "./Components/CaseSingle/CaseSingle";
import Layout from "./pages/Layout";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/daria_new" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":single" element={<CaseSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
