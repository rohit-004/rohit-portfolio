import React from "react";
import { motion } from "framer-motion";
import {
  DiJava,
  DiHtml5,
  DiCss3,
  DiReact,
  DiJavascript1,
  DiSass,
} from "react-icons/di";
import { SiEclipseide, SiMysql, SiPostman, SiRedux, SiSpringboot, SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const AboutMe = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity: 0,
      y: "-100%",
    },
    three: {
      opacity: 0,
      x: "100%",
    },

    four: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <div id="about_me">
      <h2>About Me</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>Rohit Kandari</h3>
          <p>I am a 2023 graduate in Electronics and Communications Engineering from GGSIPU. I enjoy developing websites and have experience creating the front end for various websites, as well as the backend using Spring Boot.</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            duration: "0.1",
          }}
        >
          <div className="icons">
            <DiJava size={56}/>
            <SiSpringboot size={56}/>
            <SiMysql size={56}/>
            <SiPostman size={56}/>
          </div>
          <span>Java Developer</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.three}
        >
          <div className="icons">
            <DiHtml5 size={56} />
            <DiCss3 size={56} />
            <DiJavascript1 size={56} />
            <DiReact size={56} />
            <SiRedux size={56} />
          </div>
          <span>FrontEnd Developer</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <div className="icons">
            <FaGitAlt size={56} />
            <SiVisualstudiocode size={56} />
            <SiEclipseide size={56} />
            <DiSass size={56} />
          </div>
          <span>Additional Technologies</span>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutMe;
