import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-white flex h-[5rem] justify-between items-center p-10 shadow-md">
      <div className="">
        <img className="w-20" src={Logo} alt="Logo" />
      </div>

      <div className="flex gap-8">
        <p className="">Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Team</p>
        <p>Gallery</p>
        <p>Testimonial</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>

      {/* <nav className="flex justify-between items-center p-4 bg-white shadow-md">
<div className="text-pink-500 font-bold text-2xl">
  <span>🦷 CLINIC</span>
</div>
<div className="space-x-6">
  <a href="#home" className="text-blue-600">Home</a>
  <a href="#about" className="text-blue-600">About</a>
  <a href="#services" className="text-blue-600"><p>About</p></a>
  <a href="#team" className="text-blue-600">Team</a>
  <a href="#gallery" className="text-blue-600">Gallery</a>
  <a href="#testimonial" className="text-blue-600">Testimonial</a>
  <a href="#blog" className="text-blue-600">Blog</a>
  <a href="#contact" className="text-blue-600">Contact</a>
</div>
</nav> */}
    </div>
  );
};

export default Header;
