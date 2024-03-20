import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0 md:w-9/12">
            <h2 className="text-2xl font-semibold mb-4">Jainam Karania</h2>
            <p className="text-lg">Objective is to leverage my technical skills and passion for coding to contribute effectively to a dynamic and innovative organization. By staying updated with emerging technologies and trends, I strive to continuously improve my skills and make valuable contributions that drive the success of the organization while fostering personal growth and professional advancement.</p>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jainam-karania/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://github.com/JainamKarania" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://leetcode.com/JainamKarania/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode className="text-3xl text-white hover:text-gray-300" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
