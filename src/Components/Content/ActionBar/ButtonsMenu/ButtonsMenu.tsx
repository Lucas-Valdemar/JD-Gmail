import React, { useState, useEffect } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxSelectedIcon from '@mui/icons-material/CheckBoxOutlined';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDownSharp';
import RefreshIcon from '@mui/icons-material/RefreshSharp';
import MoreIcon from '@mui/icons-material/MoreVertSharp';
import { grey } from '@mui/material/colors';
import { useSelectedEmails } from '../../Emails/Email/InteractiveItens/SelectedEmailsContext';

const ButtonsMenu = () => {
  const iconsColor = grey[800];
  const { allEmailIds, toggleAllEmailsSelection, setSortType, sortType } = useSelectedEmails();
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('date');
  const [iconState, setIconState] = useState<boolean>(false);

  const handleToggleAll = () => {
    toggleAllEmailsSelection(allEmailIds);
    setIconState(prev => !prev);
    console.log(iconState)
  };

  const handleOrder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleCheckBoxChange = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    if (isChecked) {
      setSortType('read');
      console.log(sortType)
    } else {
      setSortType(selectedValue === 'date' ? 'date' : 'user');
      console.log(sortType)

    }
  }, [isChecked, selectedValue, setSortType]);

  return (
    <div className='flex gap-[2.25rem]'>
      <div className='flex gap-[2px]'>
      {iconState ? (
          <CheckBoxSelectedIcon sx={{ color: iconsColor }} onClick={handleToggleAll} />
        ) : (
          <CheckBoxIcon sx={{ color: iconsColor }} onClick={handleToggleAll} />
        )}
        <div>
        <ArrowDownIcon sx={{ color: iconsColor }} onMouseEnter={() => setIsHovered(true)} />
        <div 
          className={`p-5 shadow-xl hidden-menu bg-white rounded-[8px] z-10 absolute ${isHovered ? 'flex' : 'hidden'} flex-col`} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='font-bold'>Organizar por</div>
          <label className='items-center flex gap-2'>
            Data
            <input
              type="radio"
              name="options"
              value="date"
              checked={selectedValue === 'date'}
              onChange={handleOrder}
            />
          </label>
          <label className='items-center flex gap-2'>
            Remetente
            <input
              type="radio"
              name="options"
              value="user"
              checked={selectedValue === 'user'}
              onChange={handleOrder}
            />
          </label>
          <label className='items-center flex gap-2'>
            Não Lidos Primeiro
            <input 
              type='checkbox' 
              name='checkbox' 
              checked={isChecked}
              onChange={handleCheckBoxChange} 
            />
          </label>
        </div>
        </div>
      </div>
      <RefreshIcon sx={{ color: iconsColor }} />
        <MoreIcon sx={{ color: iconsColor }} />
    </div>
  );
}

export default ButtonsMenu;
