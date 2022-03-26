import Image from "next/image";
import React from "react";
import data from "../public/data.json";
import Title from "./Title";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mt-10 md:justify-start md:items-start md:ml-20"
    >
      <Title num={1} title="About me" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textdark md:w-1/2">{data.about}</p>
      </div>
    </div>
  );
};

export default About;
