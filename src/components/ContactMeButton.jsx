import React from "react";
import { Button } from "./ui/button";

const ContactMeButton = ({label, children}) => {
  return (
    <Button className="bg-gray-900 text-white p-2 rounded-md">
      {/* {label} */}
      {children}
    </Button>
  );
};

export default ContactMeButton;
