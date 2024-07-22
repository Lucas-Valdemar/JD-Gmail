import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { grey } from '@mui/material/colors';
import { useSelectedEmails } from '../../Emails/Email/InteractiveItens/SelectedEmailsContext';

const TotalEmailsPagination = () => {
    const enableButton = grey[800]
    const disableButton = grey[500]
    const [showing, setShowing] = useState(0);

    const { allEmailIds } = useSelectedEmails();

    const totalObjects = Array.isArray(allEmailIds) ? allEmailIds.length : 0;

    
    useEffect( () => {
            if (totalObjects >= showing){
                setShowing(20)
            } else {
                setShowing(totalObjects)
            }
        }, [totalObjects])
    
  return (
    <div className='flex gap-7'>{`1-${showing} of ${totalObjects}`}<div className='flex'><ArrowLeftIcon sx={{color:disableButton}}/><ArrowRightIcon sx={{color:enableButton}}/></div></div>
  )
}

export default TotalEmailsPagination