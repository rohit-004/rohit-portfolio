import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/java_data.json";

const JavaProject = () => {
  return (
    <div id="jproject">
      <h2>FULL STACK PROJECTS</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={10000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <h3>{i.title}</h3>
                <img src={i.imgSrc} alt={i.title} />
                <p>{i.description}</p>
                <div className="button">
                  <a target={"blank"} href={i.cilentSideCode}>
                    CILENT SIDE CODE
                  </a>
                  <a target={"blank"} href={i.serverSideCode}>
                    SERVER SIDE CODE
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default JavaProject;
