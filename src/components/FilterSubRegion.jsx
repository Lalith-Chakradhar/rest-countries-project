import React, {useEffect} from 'react';
import useCustomContext from "../CustomContext";

const FilterSubRegion = () => {
    const {modeToggle, fetchCountries, subregionsInARegion, subRegionFilter, setSubRegionFilter} = useCustomContext();

    useEffect(() => {
        fetchCountries();
      }, [subRegionFilter]);
      

  return (
    <div className='mx-4 my-8 w-48 relative lg:w-52'>
        <select
        value={subRegionFilter}
        onChange={(e)=> {
            setSubRegionFilter(e.target.value);
            }}
        className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} truncate py-4 px-4 w-full text-sm rounded-md shadow-lg appearance-none outline-none cursor-pointer lg:text-md lg:px-7`}
      >
        <option value="">Filter By Sub-Region</option>

        {subregionsInARegion.map((subregion,index)=> {
            return <option key={index} value={subregion}>{subregion}</option>;
        })}

      </select>

      <ion-icon 
      name="chevron-down-outline"
      className="absolute right-2 top-[18px] pointer-events-none cursor-pointer lg:right-6"
      />
    </div>
  )
}

export default FilterSubRegion;