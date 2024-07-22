import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { grey } from '@mui/material/colors';
import { useSelectedEmails } from '../../Emails/Email/InteractiveItens/SelectedEmailsContext';

const TotalEmailsPagination = () => {
    const enableButton = grey[800]
    const disableButton = grey[500]
    const [showing, setShowing] = useState(25);

    //context api
    const { allEmailIds } = useSelectedEmails();

    const totalSum = Array.isArray(allEmailIds)
        ? allEmailIds.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        : 0;

    
    useEffect( () => {
            if (totalSum >= 20){
                setShowing(20)
            } else {
                setShowing(totalSum)
            }
        }, [totalSum])
    
  return (
    <div className='flex gap-7'>{`1-${showing} of ${totalSum}`}<div className='flex'><ArrowLeftIcon sx={{color:disableButton}}/><ArrowRightIcon sx={{color:enableButton}}/></div></div>
  )
}

export default TotalEmailsPagination