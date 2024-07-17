import React from 'react';

import MenuItens from './MenuItens';

/* Ícones */
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LabelSharpIcon from '@mui/icons-material/LabelSharp';


export default function Sidebar ({sidebar, emails}) {
  return(
    <div className='sidebar flex flex-col justify-center pt-4'>
            
      <div>
        <button className='bg-[#C2E7FF] py-4 px-6 rounded-xl hover:shadow-lg ml-1'>
          <EditOutlinedIcon/> {sidebar ? 'Compose' : ''}
        </button>
      </div>
      
      <div className="menu">
        <MenuItens name={'Inbox'} icon={<InboxSharpIcon/>} sidebar={sidebar} emails={emails} />
        <MenuItens name='Snoozed' icon={<AccessAlarmSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='Sent' icon={<SendSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='Draft' icon={<DescriptionSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='More' icon={<KeyboardArrowDownSharpIcon/>} sidebar={sidebar} />
      </div> 

      <span className='h-12 flex'>&nbsp;</span>

      {sidebar ? 
        <div>
          <div className='flex flex-row justify-between px-4'>
            <h3>Labels</h3> 
            <AddOutlinedIcon/>
          </div>

          {emails.map((emails, idx)=> {
            return (
              idx < 10 ? 
                <div key={idx} className='px-4 flex flex-row mt-4'>
                  <LabelSharpIcon/>
                  <p><strong>{emails.tag}</strong></p>
                </div> 
                : 
                '' 
            )
          })}
        </div> : ''  
      }

    </div>
  )
}