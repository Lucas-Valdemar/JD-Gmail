import React, { ReactElement } from "react"

export default function MenuItens ({name, icon , sidebar, emails}:{name: string, icon: ReactElement}) {

  
  function readMails(emails) {
    let total = 0;
    console.log('emails lenght:' + emails.length)
    for(let i=0; i<emails.length;i++) {
      if(emails[i].read_state === true) {
        total = total+1
      }
    }
    console.log('total é: '+ total)
    return <span className="ml-24 font-bold">{emails.length - total}</span>
  }

  return(
    <div className={sidebar ? 'menuItem flex flex-row hover:bg-blue-100 cursor-pointer rounded-br-3xl rounded-tr-3xl  p-2 w-56 mt-2 hover:font-bold' : 'menuItem flex flex-row hover:bg-blue-100 cursor-pointer rounded-lg p-2 w-20 mt-2 ml-4'}>
      <span className="mr-4">{icon}</span> 
      <h3>{sidebar ? name : ''}</h3>
      {sidebar ? emails ?  readMails(emails) : '' : ''}
      
    </div>
  )
}