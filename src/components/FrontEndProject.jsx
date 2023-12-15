import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/data.json";

const FrontEndProject = () => {
  return (
    <div id="feproject">
      <h2>FRONT END PROJECTS</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={5000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <div className="button">
                    <a target={"blank"} href={i.url}>
                      LIVE
                    </a>
                    <a target={"blank"} href={i.link}>
                      CODE
                    </a>
                  </div>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default FrontEndProject;
