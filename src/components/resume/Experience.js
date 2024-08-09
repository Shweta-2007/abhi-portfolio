import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              Dec2023 - Present
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Northeastern University
            </h2>
          </div>
          {/* <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
          <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Financial Analyst"
              // subTitle="Global Research and Risk Solutions"
              result="USA"
              des={[
                "1. Conducted detailed data analysis using Excel, Tableau and Python, providing valuable insights for informed decision-making in the finance department and managed financial data entry, ensuring accuracy and compliance.",
                <br />,
                "2. Developed a financial Tableau dashboard, set up automation to send weekly reports of the dashboard using AWS, Python",
                <br />,
                "3. Spearheaded the seamless processing of invoices, integrating manual and imported entries, while proficiently overseeing receipt management, batch processing, and resolution of past due accounts, resulting in enhanced efficiency",
                <br />,
                "4. Supported day-to-day finance operations, streamlining workflows and improving overall department efficiency with the help of Python automation scripts.",
              ]}
            />
          </div>
        </div>
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">
                August 2021 - July 2023
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Ganit Inc</h2>
            </div>
            {/* <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
            <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Senior Data Analyst"
                // subTitle="Snowflake Data Center of Excellence (COE)"
                result="India"
                des={[
                  "1. Engineered a machine learning model tailored for financial forecasting, catering to the needs of a prominent global CPG client which helped their sales team to set target accurately by 11%",

                  <br />,
                  "2. Created an advance machine learning-powered demand forecasting model and worked closely with clients, operating at the utmost granularity (store-sku) level across an extensive portfolio of over 20 thousand store-sku combinations. This model empowered area sales managers within a prominent global CPG client to establish precise targets. A substantial 15% enhancement in accuracy alongside a commendable reduction in SKU wastage, signifying the transformative impact of this solution",
                  <br />,
                  "3. Applied natural language processing and pattern recognition techniques to analyze customer feedback and transaction data, leading to the identification of emerging risk trends and informing proactive risk mitigation strategies.",
                  <br />,
                  "4. Collaborated on refining digital risk assessment tools, combining insights from large datasets to optimize algorithms used in risk prediction, resulting in a 20% increase in predictive reliability.",
                  <br />,
                  "5. Spearheaded a project for a major financial services client, utilizing Python to build predictive models that processed over 10 million data points, significantly improving risk assessment accuracy by 25%.",
                  <br />,
                  "6. Conducted in-depth regression and machine-learning analyses for a retail banking client, applying R to identify key risk factors and contributing to a 15% reduction in loan default rates.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
