import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer text-blue-500 border-2 border-[#DCDEE4] w-[260px] h-full flex flex-col justify-between gap-6 overflow-y-auto">
      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
