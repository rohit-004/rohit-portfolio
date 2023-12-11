import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>RohitKandari.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about_me">
        About Me
      </a>
      <a onClick={() => setMenuOpen(false)} href="#feproject">
        Projects
      </a>
      <a onClick={() => setMenuOpen(false)} href="#jproject">
        Full Stack
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a target="blank" href="https://drive.google.com/file/d/1oCqeRABeIJiTan7eku33nQW_sokmNHEX/view?usp=sharing">
      <button>Resume</button>
    </a>
  </>
);

export default Header;
