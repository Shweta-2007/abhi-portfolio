import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            Fall 2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Northeastern University
          </h2>
        </div>
        {/* <div className="mt-6 lgl:mt-14 w-full h-[320px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Analytics Engineering"
            subTitle="Coursework: Foundation of Data Analytics, Data Management for Analytics, Data Mining, Data Algorithms"
            result="GPA 3.9/4"
            des="As a graduate student at Northeastern University, I specialize as a Data Engineer and Data Scientist, transforming raw data into actionable insights and robust data solutions. My expertise     spans designing and optimizing data pipelines, implementing real-time big data streaming, and performing in-depth data analysis for financial forecasting and developing advanced machine learning models"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            National Institute of Technology Warangal
          </h2>
        </div>
        {/* <div className="mt-6 lgl:mt-14 w-full h-[320px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mechanical Engineering"
            subTitle="Coursework: Problem solving and computer programming, Integral calculus and Numerical method, Statistics"
            result="GPA 8/10"
            des="I honed my skills as a Data Engineer and Data Scientist through coursework in problem solving and computer programming, integral calculus and numerical methods, and statistics. This comprehensive foundation enabled me to develop and optimize data pipelines, apply advanced mathematical techniques to complex data problems, and leverage statistical analysis for accurate forecasting and insightful machine learning models."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
