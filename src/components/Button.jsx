import React from "react";

const Button = ({ text }) => {
  return (
    <button className="font-bold  px-8 py-3 bg-gold text-white shadow-md shadow-gold rounded  hover:bg-white hover:text-gold transition-colors duration-500">
      {text}
    </button>
  );
};

export default Button;
