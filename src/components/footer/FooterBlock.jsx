import React from "react";
import {
  SlSocialFacebook,
  SlSocialGoogle,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTwitter,
  SlSocialVkontakte,
} from "react-icons/sl";
import logo from "../../assets/svg/logo.svg";
import "./footerBlock.css";

const FooterBlock = () => {
  return (
    <footer className="footer-block" id="subscribe">
      <img src={logo} alt="logo" />
      <div className="social-media-block">
        <SlSocialVkontakte />
        <SlSocialPintarest />
        <SlSocialInstagram />
        <SlSocialFacebook />
        <SlSocialGoogle />
        <SlSocialTwitter />
      </div>
      <p>All Rights Reserved 2022 3layers</p>
    </footer>
  );
};

export default FooterBlock;
