import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const handleClick = (props) => {
    setActive(props);
    const element = document.getElementById(props);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [activeStatus, setActive] = useState("popular");

  return (
    <nav className="navbar">
      <div className="logo">Logo here</div>
      <button
        className={activeStatus === "popular" ? "selected" : ""}
        onClick={() => {
          handleClick("popular");
        }}
      >
        Popular
      </button>
      <button
        className={activeStatus === "newTopics" ? "selected" : ""}
        onClick={() => {
          handleClick("newTopics");
        }}
      >
        New
      </button>
      <button
        className={activeStatus === "readingList" ? "selected" : ""}
        onClick={() => {
          handleClick("readingList");
        }}
      >
        Reading List
      </button>
      <button
        className={activeStatus === "topics" ? "selected" : ""}
        onClick={() => {
          handleClick("topics");
        }}
      >
        Topics
      </button>
      <button
        className={activeStatus === "subscribe" ? "selected" : ""}
        onClick={() => {
          handleClick("subscribe");
        }}
      >
        Subscribe
      </button>
    </nav>
  );
};

export default Navbar;
