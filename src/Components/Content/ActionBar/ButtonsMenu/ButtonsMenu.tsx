import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDownSharp';
import RefreshIcon from '@mui/icons-material/RefreshSharp';
import MoreIcon from '@mui/icons-material/MoreVertSharp';
import { grey } from '@mui/material/colors';
import { useSelectedEmails } from '../../Emails/Email/InteractiveItens/SelectedEmailsContext';

const ButtonsMenu = () => {
  const iconsColor = grey[800];
  const { allEmailIds, toggleAllEmailsSelection, toggleSortType } = useSelectedEmails();

  
  const handleToggleAll = () => {
    toggleAllEmailsSelection(allEmailIds);
  };

  const handleToggleSort = () => {  // Adicione isto
    toggleSortType();
  };

  return (
    <div className='flex gap-[2.25rem]'>
      <div className='flex gap-[2px]'>
        <CheckBoxIcon sx={{color: iconsColor}} onClick={handleToggleAll} />
        <ArrowDownIcon sx={{color: iconsColor}}/>
      </div>
      <RefreshIcon sx={{color: iconsColor}}/>
      <MoreIcon sx={{color: iconsColor}} onClick={handleToggleSort}/>
    </div>
  );
}

export default ButtonsMenu;
