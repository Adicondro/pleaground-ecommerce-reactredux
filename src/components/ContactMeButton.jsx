import React from "react";

const ContactMeButton = ({label, children}) => {
  return (
    <button className="bg-gray-900 text-white p-2 rounded-md">
      {/* {label} */}
      {children}
    </button>
  );
};

export default ContactMeButton;
