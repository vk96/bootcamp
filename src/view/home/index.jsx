import React from "react";
import VideoComp from "../../components/VideoComp";
// cust comp
import GuidenceComp from "../../components/GuidenceComp";
import MyCourses from "../../components/MyCourses";
import About from "../../components/About";
// react scroll
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <VideoComp />
      <GuidenceComp />
      <MyCourses />
      <Element name="about">
        <About name="My Bottcamp" />
      </Element>
    </div>
  );
}
