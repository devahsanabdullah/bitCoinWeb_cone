import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Section from "./Components/Section";
import DetailSection from "./Components/DetailSection";
import { Box } from "@mui/material";
import MonetryPolicy from "./Components/MonetryPolicy";
import ADItoken from "./Components/ADItoken";
import RoadMap from "./Components/RoadMap";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import Ahsan from "./Components/ahsan";
export default function App() {
  return (
    <>
    <Ahsan />
    </>
    // <Box
    //   className="parentContainer"
    //   sx={{ margin: "0px auto", maxWidth: { md: "100%", xl: "1280px" } }}
    // >
      
    //     <Header />
    //   <Section />
    //   <Fade>
    //     <DetailSection />
    //   </Fade>
    //   <Fade>
    //     <MonetryPolicy />
    //   </Fade>
    //   <Slide>
    //     <ADItoken />
    //   </Slide>
    //   <RoadMap />
    //   <Fade>
    //     <FAQs />
    //   </Fade>
    //   <Slide>
    //     <Footer />
    //   </Slide>
    // </Box>
  );
}
