import React, {useEffect} from 'react';
import useCustomContext from "../CustomContext";

const FilterSubRegion = () => {
    const {modeToggle, fetchCountries, subregionsInARegion, subRegionFilter, setSubRegionFilter} = useCustomContext();

    useEffect(() => {
        fetchCountries();
      }, [subRegionFilter]);
      

  return (
    <div className='mx-4 my-8 w-52 relative'>
        <select
        value={subRegionFilter}
        onChange={(e)=> {
            setSubRegionFilter(e.target.value);
            }}
        className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} py-4 px-7 w-full text-sm rounded-md shadow-lg appearance-none outline-none cursor-pointer lg:text-md`}
      >
        <option value="">Filter By Sub-Region</option>

        {subregionsInARegion.map((subregion,index)=> {
            return <option key={index} value={subregion}>{subregion}</option>;
        })}

      </select>

      <ion-icon 
      name="chevron-down-outline"
      className="absolute right-6 top-[18px] pointer-events-none cursor-pointer"
      />
    </div>
  )
}

export default FilterSubRegion;