import React, { useEffect, useState } from 'react';
import api from '../services/api.ts'

import Sidebar from './Components/Root/Menu/Sidebar.tsx';

function App() {

  const [emails, setEmails] = useState([])

  const [sidebar, setSidebar] = useState(true)
  const [sidebarState, setSidebarState] = useState(false)

  /* Fetch Emails */
  async function fetchEmails() {
    try {
      const response = await api.get('/')
      setEmails(response.data)
    }
    catch(error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchEmails()
  }, [])
  console.log(emails)


  return (
    <>
      <div className='h-20 bg-slate-100 flex justify-center items-center flex-col'>
        <h2>Aqui vai o topbar, depois, vem o conteúdo</h2> 
        <button className='bg-green-600' onClick={()=>{setSidebar(true), setSidebarState(true)}}>ativa sidebarr</button>
        <button className='bg-red-600' onClick={()=>{setSidebar(false), setSidebarState(false)}}>desativa sidebarr</button>
        
      </div>
      <div className='flex flex-row justify-between h-screen '>
        
        <div className={sidebar ? 'bg-slate-100 w-60 transition-all' : 'bg-slate-100 w-20 transition-all hover:w-60'} onMouseEnter={()=>{setSidebar(true)}} onMouseLeave={()=>{sidebarState === false ? setSidebar(false) : setSidebar(true)}}>

          <Sidebar sidebar={sidebar} emails={emails} />
        
        </div>

        <div className="content bg-gray-600">
          Aqui vem o conteúdo
        </div>

        <div className="otherApps w-20 bg-red-600 h-full">
          aqui vem a barra da direita
        </div>
      </div>


    </>
  )
}

export default App
