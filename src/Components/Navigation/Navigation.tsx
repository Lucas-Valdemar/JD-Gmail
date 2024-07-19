
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-2.5">
      <div className=' '>
        <div className=' '>
          <MenuRoundedIcon />
        </div>
        <img src="" alt="Logo do Gmail" />
        <div className= ''>Gmail</div>
      </div>

      <div className=' '>
      <SearchRoundedIcon />
        <input placeholder="Search mail" />
        <TuneRoundedIcon />
        <button className=''>
        </button>
      </div>

      <div className=''>
        <span>
          <HelpOutlineRoundedIcon />
        </span>
        <span>{<SettingsRoundedIcon/>}</span>
        <span>{<AppsRoundedIcon/>}</span>
        <img src=" " alt="User Avatar" className=''/>
      </div>
    </nav>
  );
};

export default Navigation;