import React, {useEffect} from 'react';
import useCustomContext from "../CustomContext";

const CountrySearch = () => {

  const {modeToggle, searchTerm, setSearchTerm, fetchCountries, setSelectedSortFilter} = useCustomContext();

    useEffect(() => {
          fetchCountries();
          setSelectedSortFilter(''); //reset sort filters since data is being changed
    }, [searchTerm]);

  return (
    <div className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} mx-4 rounded-md shadow-lg py-4 px-7 flex items-center gap-6 lg:w-9/12`}>
        <ion-icon name="search-sharp"/>
        <input type="text" 
        value={searchTerm}
        placeholder='Search for a country...'
        className= {`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} outline-none cursor-pointer w-full`}
        onChange={(e)=> {
            setSearchTerm(e.target.value);
        }}/>
    </div>
  )
}

export default CountrySearch