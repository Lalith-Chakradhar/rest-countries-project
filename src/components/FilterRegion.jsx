import React, {useEffect} from 'react';
import useCustomContext from "../CustomContext";

const FilterRegion = () => {

    const {modeToggle, allFilters, fetchCountries, regionFilter, setRegionFilter, setSubRegionsInARegion, setSelectedSortFilter} = useCustomContext();

    useEffect(() => {
        fetchCountries();
        setSelectedSortFilter(''); //reset sort filters since data is being changed
      }, [regionFilter]);
      

  return (
    <div className='mx-4 my-8 w-48 relative lg:w-52'>
        <select
        value={regionFilter}
        onChange={(e)=> {
            setSubRegionsInARegion([]); //Reset sub regions on changing
            setRegionFilter(e.target.value);
            }}
        className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} truncate py-4 px-4 w-full text-sm rounded-md shadow-lg appearance-none outline-none cursor-pointer lg:text-md lg:px-7`}
      >
        <option value="">Filter By Region</option>

        {allFilters.map((region,index)=> {
            return <option key={index} value={region}>{region}</option>;
        })}

      </select>

      <ion-icon 
      name="chevron-down-outline"
      className="absolute right-2 top-[18px] pointer-events-none cursor-pointer lg:right-6"
      />
    </div>
  )
}

export default FilterRegion;