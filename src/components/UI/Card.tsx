import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="w-full p-4 rounded-sm shadow-lg">{children}</div>;
};

export default Card;
