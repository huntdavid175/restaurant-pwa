import React from "react";
import { MoreVertical } from "lucide-react";

const ActionButton: React.FC = () => {
  return (
    <div onClick={() => console.log("Hello")} className="cursor-pointer">
      <MoreVertical size={20} />
    </div>
  );
};

export default ActionButton;
