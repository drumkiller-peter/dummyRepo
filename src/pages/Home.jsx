import React from "react";
import EssentialBlock from "../components/essential/EssentialBlock";
import FooterBlock from "../components/footer/FooterBlock";
import CarouselBlock from "../components/main/carousel_component/CarouselBlock";
import Main from "../components/main/Main";
import Popular from "../popular/Popular";

function Home() {
  return (
    <>
      <Main />
      <CarouselBlock />
      <Popular />
      <EssentialBlock />
      <FooterBlock />
    </>
  );
}

export default Home;
