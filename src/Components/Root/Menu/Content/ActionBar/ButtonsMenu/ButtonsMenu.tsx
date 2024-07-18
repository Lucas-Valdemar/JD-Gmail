import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDownSharp';
import RefreshIcon from '@mui/icons-material/RefreshSharp';
import MoreIcon from '@mui/icons-material/MoreVertSharp';
import { grey } from '@mui/material/colors';


const ButtonsMenu = () => {
    const iconsColor = grey[800]
  return (
    <div className='flex gap-[2.25rem]'><div className='flex gap-[2px]'><CheckBoxIcon sx={{color: iconsColor}}/><ArrowDownIcon sx={{color: iconsColor}}/></div><RefreshIcon sx={{color: iconsColor}}/><MoreIcon sx={{color: iconsColor}}/></div>
  )
}

export default ButtonsMenu