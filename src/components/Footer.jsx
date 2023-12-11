import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/72212590?v=4"}
          alt="Founder"
        />

        <h2>Rohit Kandari</h2>
        <p>EAT | SLEEP | CODE | REPEAT</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/rohitkandari400" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/rohit-kandari-899500188/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/rohit-004" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;