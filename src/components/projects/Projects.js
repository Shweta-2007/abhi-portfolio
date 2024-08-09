import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Real-Time Stock Pipeline with Kafka & AWS"
          des="Processed real-time stock market data using Apache Kafka for streaming and various AWS services for data storage, cataloging, and querying. Ensured a robust and scalable solution for real-time data ingestion, processing, and analysis.
"
          src={projectOne}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/Real-Time-Stock-Market-Data-Pipeline-with-Kafka-and-AWS"
        />
        <ProjectsCard
          title="Streamlined Immigration Database with ETL"
          des="This project developed a relational database for the International Employee Immigration domain, it features a central analytics platform for employee data analysis and compliance with US immigration requirements. Implemented in MySQL with a MongoDB prototype, it includes ETL processes and integrates with Python for advanced analytics."
          src={projectTwo}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/International-Employee-Immigration-Data-Management"
        />
        <ProjectsCard
          title="EEG Classification model"
          des="
          This project focuses on developing a classification model to analyze and categorize EEG data using the CHB-MIT EEG Database. Aimed at improving epilepsy diagnosis, it involves preprocessing data to handle missing values, extracting features from time and frequency domains, and training a deep learning model (CNN or RNN) to ensure high accuracy and prevent overfitting. "
          src={projectThree}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/EEG-Classification-model"
        />
        <ProjectsCard
          title="Customer Segmentation via RFM Analysis"
          des="This project performs RFM analysis on an eCommerce dataset to segment customers into distinct groups based on their RFM scores. The goal is to uncover patterns within the customer base, providing businesses with insights into customer behavior."
          src={projectFour}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/Customer-Segmentation-using-RFM-Analysis"
        />
        <ProjectsCard
          title="Taxi Data ETL and Analytics with GCP & BigQuery"
          des="This project involves executing ETL and data analysis on Taxi data using a suite of tools including GCP Storage, Python, Compute Instances, Mage Data Pipeline Tool, BigQuery, and Looker Studio. Mage orchestrate data workflows, BigQuery is utilized for scalable data processing, and Looker Studio provides advanced visualization and reporting.
"
          src={projectFive}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/Data-Engineering-Project-Taxi-data"
        />
        <ProjectsCard
          title="Advanced Crime Data Analysis: EDA and Predictive Modeling"
          des="This project explores crime data focusing on data cleaning, exploratory data analysis (EDA), and advanced analytics such as time series forecasting and correlation analysis  to uncover insights into criminal activities. EDA techniques, including visualizations and statistical analyses, reveal crime trends, seasonal patterns, and regional variations."
          src={projectSix}
          icon={<BsGithub />}
          link="https://github.com/Abhisheksinha1830/Crime-Rate-analysis"
        />
      </div>

      <div className="flex justify-center items-center text-center mt-20">
        <a href="https://github.com/Abhisheksinha1830" target="_blank">
          <div className="flex flex-col gap-4 font-titleFont">
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
              <u>VIEW MORE</u>
            </h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
