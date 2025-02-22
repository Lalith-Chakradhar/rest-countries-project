import React, {createContext, useState, useContext } from 'react';


const CustomContext = createContext();


export const CustomProvider = ({children}) => {

    const [modeToggle, setModeToggle] = useState('Light');
    const [countriesData, setCountriesData] = useState(null);
    const [allFilters, setAllFilters] = useState([]);
    const [regionFilter, setRegionFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const [subregionsInARegion, setSubRegionsInARegion] = useState([]);
    const [subRegionFilter, setSubRegionFilter] = useState('');

    const [selectedSortFilter, setSelectedSortFilter] = useState('');

    const [countryDetails, setCountryDetails] = useState(null);
    
    

    const fetchCountries = async() => {

        try{

            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();

            if(regionFilter !== '' && allFilters.length!==0 && searchTerm.length===0)
            {

                const filteredData = data.filter((country)=> country.region === regionFilter);
                setCountriesData(filteredData); //We got all the countries in a particular Region


                setSubRegionsInARegion(() => {
                    let newState = filteredData.reduce((allSubRegions,country)=> {
 
                         if(!allSubRegions.includes(country.subregion))
                         {
                            allSubRegions.push(country.subregion);
                         }
 
                         return allSubRegions;
                     },[]);
 
                     return newState;
                 });


                if(subRegionFilter !== '' && subregionsInARegion.length!==0)
                {
                    const filteredData = data.filter((country)=> (country.region === regionFilter && country.subregion === subRegionFilter));
                    setCountriesData(filteredData); //We got all the countries in a particular Region as well in a subregion
                }

            }
            else if(searchTerm.length!==0 && regionFilter === '')
            {

                const searchExp = new RegExp(searchTerm, 'i');

                const searchedData = data.filter((country)=> country["name"]["common"].match(searchExp));
                setCountriesData(searchedData);

            }
            else if(regionFilter !== '' && allFilters.length!==0 && searchTerm.length!==0)
            {

                let filteredData = data.filter((country)=> country.region === regionFilter);


                if(subRegionFilter !== '' && subregionsInARegion.length!==0)
                {
                    filteredData = filteredData.filter((country)=> (country.subregion === subRegionFilter));
                }

                const searchExp = new RegExp(searchTerm, 'i');

                const searchedAndFilteredData = filteredData.filter((country)=> country["name"]["common"].match(searchExp));

                setCountriesData(searchedAndFilteredData);

            }
            else
            {
                
                setCountriesData(data);
                setAllFilters(() => {
                   let newState = data.reduce((allRegions,country)=> {

                        if(!allRegions.includes(country.region))
                        {
                            allRegions.push(country.region);
                        }

                        return allRegions;
                    },[]);

                    return newState;
                });
            }
            
        }
        catch(error){
            alert('Error fetching the data:', error);
        }
    }


    const applySortFilter = () => {

        if(countriesData && selectedSortFilter !== '')
        {
            let sortedData;

            let duplicatedCountriesData = [...countriesData];

            if(selectedSortFilter === 'Lowest to Highest Population')
            {
                sortedData = duplicatedCountriesData.sort((country1, country2) => country1['population'] - country2['population']);
            }
            else if(selectedSortFilter === 'Highest to Lowest Population')
            {
                sortedData = duplicatedCountriesData.sort((country1, country2) => country2['population'] - country1['population']);
            }
            else if(selectedSortFilter === 'Lowest to Highest Area')
            {
                sortedData = duplicatedCountriesData.sort((country1, country2) => country1['area'] - country2['area']);
            }
            else
            {
                sortedData = duplicatedCountriesData.sort((country1, country2) => country2['area'] - country1['area']);
            }

            setCountriesData(sortedData);
        }
    }

    return (
        <CustomContext.Provider value={{modeToggle, 
        setModeToggle, 
        countriesData, 
        fetchCountries, 
        allFilters, 
        regionFilter, 
        setRegionFilter, 
        searchTerm, 
        setSearchTerm,
        subregionsInARegion,
        setSubRegionsInARegion,
        subRegionFilter, 
        setSubRegionFilter,
        applySortFilter,
        selectedSortFilter,
        setSelectedSortFilter,
        countryDetails,
        setCountryDetails
        }}>
            {children}
        </CustomContext.Provider>
    );
}


const useCustomContext = () => useContext(CustomContext); //creating custom hook for making it more simple

export default useCustomContext;


