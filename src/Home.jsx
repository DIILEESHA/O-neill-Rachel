import React from "react";
import Header from "./components/header/Header";
import Story from "./components/story/Story";
import Timeline from "./components/timeline/Timeline";
import Rsvp from "./components/rsvp/Rsvp";
import Enter from "./components/enter/Enter";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import QrGenerator from "./QrGenerator";
import Vtimeline from "./components/timeline/Vtimeline";

const Home = () => {
  return (
    <div className="sold">
      <div className="jkk">
        {/* <QrGenerator /> */}
        <Nav />
      </div>
      <div id="header">
        <Header />
      </div>

      <div id="our-story">
        <Story />
      </div>

      <div id="timeline">
        <Vtimeline />
      </div>

      <div id="rsvp">
        <Rsvp />
      </div>
      <div>
        <Enter />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
