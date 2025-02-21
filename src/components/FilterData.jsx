import React from 'react';
import CountrySearch from './CountrySearch';
import FilterRegion from './FilterRegion';

const FilterData = () => {
  return (
    <div className='flex flex-col mx-3 lg:flex-row lg:justify-between lg:items-center lg:mx-16 lg:my-8'>
        <CountrySearch/>
        <FilterRegion/>
    </div>
  )
}

export default FilterData