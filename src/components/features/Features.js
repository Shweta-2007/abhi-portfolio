import React from "react";
import { AiFillRobot, AiFillSetting } from "react-icons/ai";
import { FaBrain, FaGlobe, FaDatabase } from "react-icons/fa";
import { SiProgress, SiApacheairflow, SiBuildkite } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Database Design"
          des="Developed comprehensive database design skills, including relational and NoSQL databases, proficient in SQL, ER diagrams, normalization, and handling complex data structures."
          icon={<FaDatabase />}
          link="https://github.com/Abhisheksinha1830/Data-Engineering-Project-Taxi-data"
        />
        <Card
          title="Data Governance"
          des="Developed strong data governance skills, ensuring data integrity, privacy, and compliance through the implementation of policies, standards, and best practices for data management."
          icon={<AiFillSetting />}
          link=" https://github.com/Abhisheksinha1830/International-Employee-Immigration-Data-Management"
        />
        <Card
          title="Visualizations"
          des="
          Created compelling data visualizations using tools such as Tableau and Matplotlib to effectively communicate insights, trends, and patterns, facilitating informed decision-making and stakeholder engagement."
          icon={<SiProgress />}
          link="https://public.tableau.com/app/profile/abhishek.sinha2708/viz/AnalysisoftheUniversityqueryDatabase/Story1"
        />
        <Card
          title="Classification Analysis"
          des="Implemented data science methodologies, including data wrangling, statistical analysis, and building advanced machine learning models, to derive actionable insights and drive data-driven decision-making."
          icon={<FaBrain />}
          link="https://github.com/Abhisheksinha1830/EEG-Classification-model"
        />
        <Card
          title="Data Pipelining"
          des="Designed and implemented data pipelines to automate data extraction, transformation, and loading (ETL) using AWS, ensuring efficient processing and integration of large real time datasets for accurate and timely analytics."
          icon={<SiApacheairflow />}
          link=" https://github.com/Abhisheksinha1830/Real-Time-Stock-Market-Data-Pipeline-with-Kafka-and-AWS"
        />
        <Card
          title="Regression analysis"
          des="Applied regression analysis techniques to model relationships between variables, predict outcomes, and derive actionable insights from complex datasets, enhancing decision-making and forecasting accuracy."
          icon={<FaBrain />}
          link="https://github.com/Abhisheksinha1830/Crime-Rate-analysis"
        />
      </div>
    </section>
  );
};

export default Features;
