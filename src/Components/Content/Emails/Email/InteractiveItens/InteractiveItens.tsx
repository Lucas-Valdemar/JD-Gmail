import React from 'react'
import StarIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { grey } from '@mui/material/colors';

const InteractiveItens = ({sender}) => {

    const iconsColor = grey[500]
  return (
    <div className="flex items-center"><CheckBoxIcon sx={{color: iconsColor,width: "20px"}}/><StarIcon sx={{color: iconsColor}}/><LabelIcon sx={{color: iconsColor}}/> <p>{sender}</p></div>
  )
}

export default InteractiveItens