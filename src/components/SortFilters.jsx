import React from 'react';
import useCustomContext from "../CustomContext";

const SortFilters = () => {

    const {modeToggle} = useCustomContext();

  return (
    <div className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} cursor-pointer p-5 rounded-md shadow-lg flex items-center`}>
        <ion-icon name="funnel-outline" className='size-5'/>
    </div>
  )
}

export default SortFilters;