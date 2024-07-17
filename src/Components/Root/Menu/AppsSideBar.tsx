import React from "react"

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export default function AppsSideBar() {

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="cursor-pointer" onClick={()=> {alert('Acesse nossos outros aplicativos')}}>
        <CalendarMonthOutlinedIcon color='success'/>
      </div>

      <div className="cursor-pointer" onClick={()=> {alert('Acesse nossos outros aplicativos')}}>
        <LightbulbOutlinedIcon color="warning"/>
      </div>

      <div className="cursor-pointer" onClick={()=> {alert('Acesse nossos outros aplicativos')}}>
        <TaskAltOutlinedIcon color="primary"/>
      </div>

      <div className="cursor-pointer" onClick={()=> {alert('Acesse nossos outros aplicativos')}}>
        <GroupOutlinedIcon color="primary"/>
      </div>

      <div>
        <span className="bg-gray-800 flex w-8 h-px">&nbsp;</span>
      </div>

      <div className="cursor-pointer" onClick={()=> {alert('Acesse nossos outros aplicativos')}}>
        <AddOutlinedIcon />
      </div>
    </div>
  )
}