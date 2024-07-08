import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-75 text-white p-4 z-10">
      <ul className="flex justify-center space-x-4">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
