import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
