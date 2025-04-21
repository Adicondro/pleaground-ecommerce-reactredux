import React from "react";
import ContactMeButton from "./ContactMeButton";

const Footer = () => {
  return (
    <footer className="min-h-16 py-8 border-t mt-20 flex items-center justify-between px-20">
      <p>Pleaground Copyright 2024</p>
      {/* <ContactMeButton label = "Contact Us"/> */}

      <ContactMeButton>
        Contact Us
      </ContactMeButton>
    </footer>
  );
};

export default Footer;
