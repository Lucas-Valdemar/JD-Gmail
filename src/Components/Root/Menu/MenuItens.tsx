import React, { ReactElement } from "react"

export default function MenuItens ({name, icon , sidebar, lenght}:{name: string, icon: ReactElement}) {
  return(
    <div className={sidebar ? 'menuItem flex flex-row hover:bg-blue-100 cursor-pointer rounded-br-3xl rounded-tr-3xl  p-2 w-56 mt-2 hover:font-bold' : 'menuItem flex flex-row hover:bg-blue-100 cursor-pointer rounded-lg p-2 w-20 mt-2 ml-4'}>
      <span className="mr-4">{icon}</span> 
      <h3>{sidebar ? name : ''}</h3>
      {sidebar ? lenght ?  <span className="ml-24 font-bold">{lenght}</span> : '' : ''}
    </div>
  )
}