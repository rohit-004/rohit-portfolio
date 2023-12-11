import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import JavaProject from "./components/JavaProject";
import FrontEndProject from "./components/FrontEndProject";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  console.log(ratio);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <AboutMe />
      <FrontEndProject />
      <JavaProject />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
