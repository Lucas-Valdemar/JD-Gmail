import React from 'react'
import StarIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { grey } from '@mui/material/colors';

const InteractiveItens = ({sender, read_state}) => {

  const textColor = read_state ? "text-[#8B8585] font-medium" : "text-[#1C1B1F] font-bold";

    const iconsColor = grey[500]
  return (
    <div className="flex items-center w-[14%]"><CheckBoxIcon sx={{color: iconsColor,width: "20px"}}/><StarIcon sx={{color: iconsColor}}/><LabelIcon sx={{color: iconsColor}}/> <p className={`${textColor}`}>{sender}</p></div>
  )
}

export default InteractiveItens