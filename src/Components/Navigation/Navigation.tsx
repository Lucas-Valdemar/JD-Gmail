import React from 'react';
import logo from '../../assets/logogmail.png';
import avatar from '../../assets/avatar.png';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const Navigation = ({ sidebar, setSidebar }) => {
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className="flex justify-between items-center p-2.5">
      <div className="flex items-center gap-4">
        <div className="mr-2 text-[#1c1b1fb8]" onClick={toggleSidebar}>
          <MenuRoundedIcon />
        </div>
        <img src={logo} alt="Logo do Gmail" className="w-[30px] h-[22px]" />
        <div className="text-[25px] font-inter leading-[29.05px] text-[#4a4d4c]">Gmail</div>
      </div>

      <div className="flex items-center bg-[#eaf1fb] h-12 w-[736px] rounded-full p-[5px] px-10 mr-[15rem]">
        <SearchRoundedIcon />
        <input placeholder="Search mail" className='border-none outline-none p-2.5 flex-1 bg-[#eaf1fb]' />
        <TuneRoundedIcon />
        <button className="bg-none border-none cursor-pointer flex items-center"></button>
      </div>

      <div className='flex items-center text-[#1c1b1fb8]'>
        <span>
          <HelpOutlineRoundedIcon className='ml-[15px]' />
        </span>
        <span className='ml-[15px]'>{<SettingsRoundedIcon />}</span>
        <span className='ml-[15px]'>{<AppsRoundedIcon />}</span>
        <img className='ml-[15px] w-8 h-8 rounded-full' src={avatar} alt="User Avatar" />
      </div>
    </nav>
  );
};

export default Navigation;
