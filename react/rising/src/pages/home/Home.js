import React from "react";
import TopBar from "../../topbar/TopBar.js";
import Section1 from "./section1/Section1.js";
import Footer from "../../footer/Footer.js";

export default function Home() {
    return(
        <>
          <TopBar />
          <Section1 />
          <Footer />
        </>
    );
}