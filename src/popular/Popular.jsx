import React from "react";
import popularMain from "../assets/svg/popular-main.svg";
import TitleComponent from "../components/titleComponent/TitleComponent";
import "./popular.css";
import PopularSecondaryContentComponent from "./PopularSecondaryContentComponent";

const Popular = () => {
  return (
    <div className="popular" id="popular">
      <TitleComponent title={"Popular"} />
      <div className="popular-container">
        <div className="popular-main-content">
          <img src={popularMain} alt={popularMain} />
          <div className="popular-main-content-text">
            <p>BY THOMAS LAURENCE IN INSPIRATION</p>
            <h1>
              Web page layout 101: website anatomy every designer needs to learn
            </h1>
            <p>
              User research is the reality check every project needs. Here's our
              guide to why you should be doing it — and how to get started.
            </p>
          </div>
        </div>
        <div className="popular-secondary-content">
          <div className="popular-secondary-content-one">
            <div className="side1">
              <PopularSecondaryContentComponent
                title={"FREELANCING"}
                heading={"Affiliate Systems Suck, So We Rolled Our Own"}
              />
            </div>
            <div className="side2">
              <PopularSecondaryContentComponent
                title={"RESOURCE"}
                heading={"How not to design web forms"}
              />
            </div>
          </div>
          <div className="popular-secondary-content-two">
            <div className="side3">
              <PopularSecondaryContentComponent
                title={"DESIGN PROCESS"}
                heading={"B2B Lead Generation - Tips and Strategies for 2018"}
              />
            </div>
            <div className="side4">
              <PopularSecondaryContentComponent
                title={"INSPIRATION"}
                heading={"8 Best WordPress Ecommerce Plugins"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
