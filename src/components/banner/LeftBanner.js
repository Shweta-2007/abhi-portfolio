import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaPython,
  FaDatabase,
  FaSnowflake,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiApacheairflow,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Data Engineer",
      "Senior Data Analyst",
      "Data Scientist",
      "Student",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PERSONAL WEBSITE</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Abhishek Kumar Sinha!
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a graduate student at Northeastern University, I specialize as a
          Data Engineer and Data Scientist, transforming raw data into
          actionable insights and robust data solutions. My expertise spans
          designing and optimizing data pipelines, implementing real-time big
          data streaming, and performing in-depth data analysis for financial
          forecasting and developing advanced machine learning models. My
          excellent communication skills and collaborative approach enable me to
          work effectively within cross-functional teams, consistently
          delivering impactful results.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/abhishek-k-sinha/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Abhisheksinha1830/" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/abhisinha_19?igsh=MWo4a2JrMmxud2czNw%3D%3D&utm_source=qr"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaDatabase />
            </span>
            <span className="bannerIcon">
              <FaSnowflake />
            </span>
            <span className="bannerIcon">
              <FaAws />
            </span>
            <span className="bannerIcon">
              <SiApacheairflow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
