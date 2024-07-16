import React from 'react';

import MenuItens from './MenuItens';

/* Ícones */
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import AccessAlarmSharpIcon from '@mui/icons-material/AccessAlarmSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function Sidebar ({sidebar, emails}) {
  return(
    <div className='sidebar flex flex-col justify-center pt-4'>
            
      <div>
        <button className='bg-[#C2E7FF] py-4 px-6 rounded-xl hover:shadow-lg ml-1'>
          <EditOutlinedIcon/> {sidebar ? 'Compose' : ''}
        </button>
      </div>
      
      <div className="menu">
        <MenuItens name={'Inbox'} icon={<InboxSharpIcon/>} sidebar={sidebar} lenght={emails.length} />
        <MenuItens name='Snoozed' icon={<AccessAlarmSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='Sent' icon={<SendSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='Draft' icon={<DescriptionSharpIcon/>} sidebar={sidebar} />
        <MenuItens name='More' icon={<KeyboardArrowDownSharpIcon/>} sidebar={sidebar} />
      </div> 

    </div>
  )
}