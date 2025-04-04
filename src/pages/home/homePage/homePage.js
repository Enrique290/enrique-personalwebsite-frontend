import React from "react";

import MaintenanceBanner from "../../../components/homePage/maintenancetBanner";
import Banner from "../../../components/homePage/banner";
import AboutMe from "../../../components/homePage/aboutMe";
import Studies from "../../../components/homePage/studies";
import Experience from "../../../components/homePage/experience/experience";
import Knowledge from "../../../components/homePage/knowledge";
import CV from "../../../components/homePage/cv";
import "./homePage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <MaintenanceBanner />
      <Banner />
      <AboutMe />
      <Studies />
      <Experience />
      <Knowledge />
      <CV />
    </div>
  );
}
