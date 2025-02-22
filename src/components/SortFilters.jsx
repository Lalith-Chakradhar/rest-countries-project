import React, {useState, useEffect} from 'react';
import useCustomContext from "../CustomContext";

const SortFilters = () => {

    const sortFiltersList = ['Lowest to Highest Population', 'Highest to Lowest Population', 'Lowest to Highest Area',  'Highest to Lowest Area'];
    const {modeToggle, selectedSortFilter, setSelectedSortFilter, applySortFilter} = useCustomContext();

    const [isSortFilterOpened, setIsSortFilterOpened] = useState(false);


    useEffect(()=>{

        applySortFilter();

    }, [selectedSortFilter]);

    const applySelectedOption = (e) => {
        setSelectedSortFilter(e.target.innerText);
        setIsSortFilterOpened(false);
    }

    const clearSortFilter = () => {
        setSelectedSortFilter('');
        setIsSortFilterOpened(false);
    }

  return (
    <div>
        <button className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} ml-4 sm:ml-0 cursor-pointer py-4 px-5 rounded-md shadow-lg`} onClick={()=>{setIsSortFilterOpened(true)}}>
            <ion-icon name={`${selectedSortFilter ? 'funnel-sharp' : 'funnel-outline'}`} className='size-5'/>
        </button>
        
        {(isSortFilterOpened) && (
        <div className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} z-10 w-60 p-2 absolute rounded-md mt-1`}>

            <div className='cursor-pointer hover:bg-denim hover:text-white' onClick={clearSortFilter}>Clear Sort Filter</div>
             
             {sortFiltersList.map((sortFilter, index) => {
                return <div key={index} className={`${(selectedSortFilter===sortFilter) && 'bg-denim rounded-sm text-white'} cursor-pointer hover:bg-denim hover:text-white`} onClick={applySelectedOption}>{sortFilter}</div>
                })}
             
        </div>
        )}
    </div>
  )
}

export default SortFilters;