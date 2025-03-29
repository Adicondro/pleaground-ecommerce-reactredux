import React from "react";
import ContactMeButton from "./ContactMeButton";

const Footer = () => {
  return (
    <footer className="min-h-16 py-8 border-t bg-gray-200 flex items-center justify-between px-20">
      <p>Pleaground</p>
      <ContactMeButton />
    </footer>
  );
};

export default Footer;
