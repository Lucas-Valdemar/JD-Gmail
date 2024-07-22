import React, {useState} from 'react';
import StarIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import LabelIcon from '@mui/icons-material/LabelImportantTwoTone';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxTrueIcon from '@mui/icons-material/CheckBoxOutlined';
import StarFilledIcon from '@mui/icons-material/StarRate';
import LabelFilledIcon from '@mui/icons-material/LabelImportant';
import { grey, amber } from '@mui/material/colors';

interface InteractiveItensProps {
  sender: string | null;
  read_state: boolean | null;
  hoverState: boolean;
  isCheckBoxChecked: boolean;
  setIsCheckBoxChecked: () => void;
  isStarFilled: boolean;
  setIsStarFilled: () => void;
  isLabelFilled: boolean;
  setIsLabelFilled: () => void;
}

const InteractiveItens: React.FC<InteractiveItensProps> = ({
  sender,
  read_state,
  hoverState,
  isCheckBoxChecked,
  setIsCheckBoxChecked,
}) => {
  const fontWeight = read_state ? "font-medium" : "font-bold";
  const iconsColor = grey[500];
  const iconsColorhover = grey[800];
  const yellowColor = amber['A700'];

  const [isStarFilled, setIsStarFilled] = useState(false);
  const [isLabelFilled, setIsLabelFilled] = useState(false);
  
  return (
    <div className="flex gap-[9px] items-center w-full max-w-[23%] mr-[3%]">
      <div onClick={setIsCheckBoxChecked}>
        {isCheckBoxChecked 
          ? <CheckBoxTrueIcon sx={{ color: hoverState ? iconsColorhover : iconsColor, width: "20px" }} />
          : <CheckBoxIcon sx={{ color: hoverState ? iconsColorhover : iconsColor, width: "20px" }} />}
      </div>
      <div onClick={() => setIsStarFilled(!isStarFilled)}>
        {isStarFilled 
          ? <StarFilledIcon sx={{ color: yellowColor, width: "20px" }} />
          : <StarIcon sx={{ color: hoverState ? iconsColorhover : iconsColor, width: "20px" }} />}
      </div>
      <div onClick={() => setIsLabelFilled(!isLabelFilled)}>
        {isLabelFilled 
          ? <LabelFilledIcon sx={{ color: yellowColor, width: "20px" }} />
          : <LabelIcon sx={{ color: hoverState ? iconsColorhover : iconsColor, width: "20px" }} />}
      </div>
      <p className={`font-bold text-[#1C1B1F] text-[1.3125rem] w-full truncate ${fontWeight}`}>{sender}</p>
    </div>
  );
}

export default InteractiveItens;
