import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useCustomContext from '../CustomContext';

const CountryDetailsPage = () => {

    const { id } = useParams();
    const { modeToggle, fetchCountries,setSearchTerm, setRegionFilter, countriesData, setCountryDetails, countryDetails } = useCustomContext();


    useEffect(() => {

        setRegionFilter(''); //Inorder to achieve countries which are bordering other region countries, we need to remove this filter as well.
        setSearchTerm(''); //fetching countries data on previous search. But I need all the countries for accessing the borders.

        if (!countriesData) 
        {
            fetchCountries();
        } 
        else {
            const country = countriesData.find((country) => country.cca3 === id);
            if (country) {

                setCountryDetails(country);
            }
        }

    }, [id, countriesData, setCountryDetails]);

    return (
        <div className='px-6 py-8 lg:flex lg:flex-col  lg:px-24'>

            <Link to={`/`}>
                <nav className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} shadow-md w-28 py-2 px-6 mb-16 lg:mt-8`}>
                    <button className='cursor-pointer flex items-center gap-2'>
                        <ion-icon name="arrow-back-sharp"></ion-icon>
                        <span>Back</span>
                    </button>
                </nav>
            </Link>
            
            <main>
                {(countryDetails) ? (
                    <div className='mx-auto lg:flex lg:items-center lg:justify-between lg:gap-6'>
                        <div className="bg-no-repeat bg-cover bg-center h-52 w-80 mb-12 lg:h-[500px] lg:w-5/12" style={{ backgroundImage: `url(${countryDetails["flags"]["png"]})`}}></div>
                        
                        <div className='lg:w-1/2'>

                            <h1 className='text-2xl font-bold mb-6 lg:text-3xl'>{countryDetails["name"]["common"]}</h1>
                            
                            <div className='lg:flex lg:gap-24'>
                                <div className='mb-12'>
                                    <p className='font-thin mb-2 lg:text-lg'><strong>Native Name: </strong>
                                        {(countryDetails["name"]["nativeName"]) ?
                                        (
                                            (countryDetails["name"]["nativeName"]["eng"]) ? (countryDetails["name"]["nativeName"]["eng"]["common"]) :
                                            (Object.values(countryDetails["name"]["nativeName"]).slice(-1)[0]["common"])
                                        ) : "NA"}
                                    </p>

                                    <p className='font-thin mb-2 lg:text-lg'><strong>Population: </strong>{countryDetails["population"].toLocaleString()}</p>

                                    <p className='font-thin mb-2 lg:text-lg'><strong>Region: </strong>{countryDetails["region"]}</p>

                                    <p className='font-thin mb-2 lg:text-lg'><strong>Sub Region: </strong>
                                        {(countryDetails["subregion"]) ? (countryDetails["subregion"]) : "NA"}
                                    </p>

                                    <p className='font-thin lg:text-lg'><strong>Capital: </strong>
                                        {(countryDetails["capital"]) ? (countryDetails["capital"]) : "NA"}
                                    </p>
                                </div>

                                <div className='mb-12'>
                                    {(countryDetails["tld"]) &&
                                    (<p className='font-thin mb-2 lg:text-lg'><strong>Top Level Domain: </strong>{countryDetails["tld"][0]}</p>)}
                                    
                                    
                                    <p className='font-thin mb-2 lg:text-lg'><strong>Currencies: </strong>{(countryDetails.currencies) ? (Object.values(countryDetails.currencies).map((currency, index) => {
                                        
                                        if(index === Object.values(countryDetails.currencies).length - 1)
                                        {
                                            return currency["name"];
                                        }
                                        else
                                        {
                                            return currency["name"]+", ";
                                        }
                                        
                                    })) : ("NA")}</p>

                                    <p className='font-thin lg:text-lg'><strong>Languages: </strong>{(countryDetails.languages) ? (Object.values(countryDetails.languages).map((language, index) => {
                                        
                                        if(index === Object.values(countryDetails.languages).length - 1)
                                        {
                                            return language;
                                        }
                                        else
                                        {
                                            return language+", ";
                                        }
                                        
                                    })) : ("NA")}</p>
                                </div>
                            </div>

                            <div className='lg:flex lg:gap-4'>
                                <h1 className='text-lg font-semibold mb-6'>Border Countries:</h1>

                                <div className='flex flex-wrap gap-2'>
                                    {(countryDetails.borders) ? (
                                        countryDetails.borders.map((borderId) => {
                                            let country = countriesData.find((country) => { 

                                                if(country.cca3 === borderId)
                                                {
                                                    return country;
                                                } 
                                            
                                            });

                                            if(country)
                                            {
                                                return (
                                                    <Link key={borderId} to={`/country/${borderId}`}>
                                                        <button className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} shadow-lg font-thin cursor-pointer py-1 px-7 rounded-sm`}>{country["name"]["common"]}</button>
                                                    </Link>
                                                );
                                            }
                                            else
                                            {
                                                return (
                                                    <Link key={borderId} to={`/country/${borderId}`}>
                                                        <button className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} shadow-lg font-thin cursor-pointer py-1 px-7 rounded-sm`}>{borderId}</button>
                                                    </Link>
                                                );
                                            }
                                        })
                                    ) :(<div>NA</div>)}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ): (<div>Loading the details...</div>)}
            </main>
        </div>
    );
}

export default CountryDetailsPage;