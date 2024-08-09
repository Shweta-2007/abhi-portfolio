import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contact}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 mt-5">
        <p className="text-base text-gray-400 flex items-center gap-2">
          Name: <span className="text-lightText">Abhishek Kumar Sinha</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 (857) 961-6419</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">sinhaabhishek7kumar@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 mt-5">
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
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col font-titleFont mb-14">
          <h3 className="text-sm uppercase font-light text-designColor tracking-wide"></h3>
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize"></h1>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
