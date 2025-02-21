import React from 'react';
import CountrySearch from './CountrySearch';
import FilterSubRegion from './FilterSubRegion';
import FilterRegion from './FilterRegion';
import SortFilters from './SortFilters';

const FilterData = () => {
  return (
    <div className='flex flex-col mx-3 my-6 lg:flex-row lg:justify-between lg:items-center lg:mx-16 lg:my-8'>
        <div className='flex items-start lg:w-1/3'>
          <CountrySearch/>
          <SortFilters/>
        </div>


        <div className='flex'>
          <FilterRegion/>
          <FilterSubRegion/>
        </div>
    </div>
  )
}

export default FilterData