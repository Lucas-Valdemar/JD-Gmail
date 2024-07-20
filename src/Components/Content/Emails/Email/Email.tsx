import React from 'react'
import InteractiveItens from './InteractiveItens/InteractiveItens'
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEmails, EmailInterface } from '../../../../hooks/useEmails'

const Email: React.FC<EmailInterface> = ({ id, user, subject, content, tag, favorite, read_state, horary, entry_box }) => {

  const bgColor = read_state ? "bg-[#F2F6FC]" : "bg-[#ffffff]";
  const textColor = read_state ? "text-[#8B8585] font-medium" : "text-[#1C1B1F] font-bold";
  
  const date = parseISO(horary);
  const now = new Date();
  let formattedDate;
  if (date.getFullYear() === now.getFullYear()) {
    formattedDate = format(date, "d 'de' MMM.", { locale: ptBR });
  } else {
    formattedDate = format(date, 'dd/MM/yyyy', { locale: ptBR });
  }



  return (
    <div className={`items-center flex justify-start border-solid border-[1px] border-[#ECEFF1] w-full h-[3.75rem] gap-[13%] pl-[0.6%] pr-[1.4%] ${bgColor}`}>
      <InteractiveItens sender={user} read_state={read_state}/>
      <div className={`flex items-center w-full `}>
        <div className='w-[22%]'>
          <p className={`truncate w-full ${textColor}`}>{subject}</p>
        </div>
        <div className='w-[80%]'>
          <p className='w-full truncate'>{content}</p>
        </div>
      </div>
      <div ><p className={`${textColor}`} >{formattedDate}</p></div>
    </div>
  )
}

export default Email