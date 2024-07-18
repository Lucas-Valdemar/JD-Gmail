import React from 'react'
import ButtonsMenu from './ButtonsMenu/ButtonsMenu'
import TotalEmailsPagination from './TotalEmailsPagination/TotalEmailsPagination'

const ActionBar = () => {
    const placeholder = 50

  return (
    <div className='flex justify-between'><ButtonsMenu/><TotalEmailsPagination/></div>
  )
}

export default ActionBar