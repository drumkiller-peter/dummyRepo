import React from "react";
import EssentialsBlock from "../../assets/svg/essentials.svg";
import TitleComponent from "../titleComponent/TitleComponent";
import "./essentialBlock.css";

const EssentialBlock = () => {
  return (
    <div className="essentials" id="newTopics">
      <TitleComponent title={"Essentials"} />
      <div className="essential-block">
        <div className="essential-block-texts">
          <p>BY TOMAS LAURINAVICIUS IN TUTORIALS</p>
          <h2>
            Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)
          </h2>
          <p className="essential-description">
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </div>
        <img src={EssentialsBlock} alt="essentials" />
      </div>
    </div>
  );
};

export default EssentialBlock;
