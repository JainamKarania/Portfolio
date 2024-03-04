import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Jainam Karania</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero in massa tristique, a convallis arcu feugiat.</p>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl text-white hover:text-gray-300" /></a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"><TbBrandLeetcode className="text-3xl text-white hover:text-gray-300" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
