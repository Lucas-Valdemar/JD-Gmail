import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { grey } from '@mui/material/colors';


const TotalEmailsPagination = () => {
    const enableButton = grey[800]
    const disableButton = grey[500]
    const totalEmails = 50
    const [showing, setShowing] = useState(25);
    
    useEffect( () => {
            if (totalEmails >= 25){
                setShowing(25)
            } else {
                setShowing(totalEmails)
            }
        }, [totalEmails])
    
  return (
    <div className='flex gap-7'>{`1-${showing} of ${totalEmails}`}<div className='flex'><ArrowLeftIcon sx={{color:disableButton}}/><ArrowRightIcon sx={{color:enableButton}}/></div></div>
  )
}

export default TotalEmailsPagination