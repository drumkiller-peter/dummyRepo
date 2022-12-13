import React from "react";
import "./titleHeader.css";

const TitleComponent = ({ title }) => {
  return (
    <div className="title-header">
      <h2>{title}</h2>
      <p className="view-all">View All</p>
    </div>
  );
};

export default TitleComponent;
