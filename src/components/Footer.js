import React from "react";

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 container mx-auto">
      <p>React Demo Website created with Storyblok</p>
      <div className="flex items-center my-8">
        <img
          src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
          alt="Storyblok Logo"
          className="w-48 m-4"
        />
      </div>
    </footer>
  );
};

export default Footer;
