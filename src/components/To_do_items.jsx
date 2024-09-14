import React from "react";
import { SiTicktick } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDeleteOutline } from "react-icons/md";

const To_do_items = ({ text }) => {
  return (
    <div className="flex items-center my-3 gap-2 text-blue-500">
      <div className="flex flex-1 items-center cursor-pointer">
        <SiTicktick className="w-7" />

        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <MdOutlineDeleteOutline className="w-3.5 cursor-pointer" />
    </div>
  );
};

export default To_do_items;
