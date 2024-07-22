import React, { useState } from 'react';
import InteractiveItens from './InteractiveItens/InteractiveItens';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEmails, EmailInterface } from '../../../../hooks/useEmails';
import { useSelectedEmails } from './InteractiveItens/SelectedEmailsContext';

const Email: React.FC<EmailInterface> = ({ id, user, subject, content, tag, favorite, read_state, horary, entry_box }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedEmails, toggleEmailSelection } = useSelectedEmails();

  const bgColor = read_state ? "bg-[#F2F6FC]" : "bg-[#ffffff]";
  const isSelected = selectedEmails.includes(id);
  const selectedBgColor = isSelected ? "bg-[#c2dbff]" : bgColor;
  const fontWeight = read_state ? "font-medium" : "font-bold";

  const date = parseISO(horary);
  const now = new Date();
  let formattedDate;
  if (date.getFullYear() === now.getFullYear()) {
    formattedDate = format(date, "d 'de' MMM.", { locale: ptBR });
  } else {
    formattedDate = format(date, 'dd/MM/yyyy', { locale: ptBR });
  }

  return (
    <div
      className={`items-center flex border-solid border-[1px] border-[#ECEFF1] w-full h-[2.875rem] pl-[0.6%] pr-[1.4%] ${selectedBgColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <InteractiveItens
        sender={user}
        read_state={read_state}
        hoverState={isHovered}
        isCheckBoxChecked={isSelected}
        setIsCheckBoxChecked={() => toggleEmailSelection(id)}
        isStarFilled={false}
        setIsStarFilled={() => {}}
        isLabelFilled={false}
        setIsLabelFilled={() => {}}
      />
      <div className='flex justify-start items-center w-full'>
        <p className={`w-auto line-clamp-1 shrink mr-[1%] font-bold text-[#1C1B1F] text-[1.3125rem] ${fontWeight}`}>{subject}</p>
        <p className='truncate shrink font-medium text-[#8B8585] w-fit'>- {content}</p>
        <p className={`w-auto line-clamp-1 ml-auto ${fontWeight}`}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default Email;
