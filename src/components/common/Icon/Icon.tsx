import React from "react";

import { BiTrash } from "react-icons/bi";
import { MdOutlineModeEdit } from "react-icons/md";

interface IconProps {
  type: string,
  className: string,
}

const Icon: React.FC<IconProps>= ({ type, className }) => {
  switch(type){
    case "trash":
      return <BiTrash className={className} />;
    case "edit":
      return <MdOutlineModeEdit className={className} />;
    default:
      return null;
  }
}

export default Icon;