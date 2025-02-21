import React, {useEffect} from 'react';
import useCustomContext from "../CustomContext";

const FilterRegion = () => {

    const {modeToggle, allFilters,fetchCountries, regionFilter, setRegionFilter} = useCustomContext();

    useEffect(() => {
        fetchCountries();
      }, [regionFilter]);
      

  return (
    <div className='mx-4 my-8 w-52 relative'>
        <select
        value={regionFilter}
        onChange={(e)=> {
            setRegionFilter(e.target.value);
            }}
        className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} py-4 px-7 w-full text-sm rounded-md shadow-lg appearance-none outline-none cursor-pointer lg:text-md`}
      >
        <option value="">Filter By Region</option>

        {allFilters.map((region,index)=> {
            return <option key={index} value={region}>{region}</option>;
        })}

      </select>

      <ion-icon 
      name="chevron-down-outline"
      className="absolute right-6 top-[18px] pointer-events-none cursor-pointer"
      />
    </div>
  )
}

export default FilterRegion