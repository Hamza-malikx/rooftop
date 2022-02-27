import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import AboutUs from "../../components/aboutUs/AboutUs";
import Collections from "../../components/collections/Collections";
import RoadMap from "../../components/roadMap/RoadMap";
import Partnership from "../../components/partnership/Partnership";
import Team from "../../components/team/Team";
import Development from "../../components/development/Development";
import Footer from "../../components/footer/Footer";
import GiveawayAndfaq from "../../components/giveawayAndfaq/GiveawayAndfaq";
const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Collections />
      <RoadMap />
      <GiveawayAndfaq />
      <Partnership />
      <Team />
      <Development />
      <Footer />
    </>
  );
};

export default HomePage;
