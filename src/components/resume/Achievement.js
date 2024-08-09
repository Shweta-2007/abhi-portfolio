import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaLink } from "react-icons/fa";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Undergrad</h2>
        </div>
        {/* <div className="mt-6 lgl:mt-14 w-full h-[570px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="College cricket team captain"
            // subTitle={[
            //   <a href="https://www.istevesit.in/" target="_blank">
            //     <u>
            //       Indian Society for Technical Education - VESIT (2018-2020)
            //     </u>
            //   </a>,
            // ]}
            // result={
            //   <a
            //     href="https://drive.google.com/file/d/1VlWF8z33X7QPPrVHDtPcbvUYWPaFKuIk/view?usp=sharing"
            //     target="_blank"
            //   >
            //     <FaLink />
            //   </a>
            // }
            des="Led my college cricket team to state-level competitions in my sophomore year, demonstrating strong leadership, teamwork, and strategic planning skills. Managed team dynamics and developed game strategies, contributing to our successful performance at the state level."
          />
          <ResumeCard
            title="Community Service"
            // subTitle={[
            //   <a
            //     href="https://link.springer.com/chapter/10.1007/978-981-19-0019-8_3"
            //     target="_blank"
            //   >
            //     <u>
            //       {" "}
            //       Springer - Crime Analysis using Artificial Intelligence (Apr
            //       2022)
            //     </u>
            //   </a>,
            // ]}
            // result={
            //   <a
            //     href="https://link.springer.com/chapter/10.1007/978-981-19-0019-8_3"
            //     target="_blank"
            //   >
            //     <FaLink />
            //   </a>
            // }
            des="While working as a team member at VSNS NGO Agra, India during the COVID pandemic, I developed strong organizational skills, attention to detail, and the ability to handle sensitive information discreetly. Additionally, my interactions with diverse populations have equipped me to effectively support my team and address unique challenges."
          />
        </div>
      </div>
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2018 - present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Social Volunteering
          </h2>
        </div> */}
        {/* <div className="mt-6 lgl:mt-14 w-full h-[570px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
        {/* <div className="mt-6 lgl:mt-14 w-full lg:w-auto lg:flex-grow border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Social Responsibility Incharge"
            subTitle={[
              <a href="https://vesit.ves.ac.in/" target="_blank">
                <u>
                  Vivekanand Education Society's Institute of Tech (2018-2020)
                </u>
              </a>,
            ]}
            result={
              <a
                href="https://drive.google.com/file/d/1CrN_336glbYPVyNKrDegy0X2sWbQbCOn/view?usp=sharing"
                target="_blank"
              >
                <FaLink />
              </a>
            }
            des="During my third and final year, I assumed the significant role of leading the 'Social Responsibility Team' within my class, due to numerous contributions to various N.G.O.s and initiatives focused on blood donations and fundraising activities."
          />
          <ResumeCard
            title="Education Volunteer"
            subTitle={[
              <a href="https://www.teameverest.ngo/" target="_blank">
                <u>Team Everest NGO (May 2023)</u>
              </a>,
              ", ",
              <a
                href="https://www.instagram.com/khulaaasmantrust"
                target="_blank"
              >
                <u>Khula Aasman NGO (Sept 2018)</u>
              </a>,
            ]}
            result={
              <a
                href="https://drive.google.com/file/d/1yl1UuQEi3MxGEU8MowOgdZFaC2yBPlsM/view?usp=drive_link"
                target="_blank"
              >
                <FaLink />
              </a>
            }
            des="As an Education Volunteer at Team Everest and Khula Aasman NGOs, I had the privilege of crafting engaging educational content for children. Through innovative approaches, I aimed to make learning both enjoyable and impactful, contributing to the educational empowerment of young minds in collaboration with these inspiring organizations."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Achievement;
