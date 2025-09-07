import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";
import TeamSection from "./components/TeamSection";
import ContactUs from "./components/ContactUs";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWorks/>
      <TeamSection/>
      <ContactUs/>
    </div>
  );
};

export default App;
