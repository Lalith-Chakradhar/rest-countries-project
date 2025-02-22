import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useCustomContext from '../CustomContext';

const CountryDetailsPage = () => {

    const { id } = useParams();
    const { fetchCountries, countriesData, setCountryDetails, countryDetails } = useCustomContext();

    
    useEffect(() => {
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
    }, [id, countriesData, fetchCountries, setCountryDetails]);

    return (
        <div className='px-6 py-8'>
            <nav>
                <button>Back</button>
            </nav>
            
            <main>
                {(countryDetails) ? (
                    <div>
                        <div className="bg-no-repeat bg-cover h-52 w-80" style={{ backgroundImage: `url(${countryDetails["flags"]["png"]})`}}></div>
                        <div>

                            <h1 className='text-xl font-bold mb-4'>{countryDetails["name"]["common"]}</h1>
                            
                            <div>

                            <p className='text-md mb-1'><strong>Native Name: </strong>
                                {(countryDetails["name"]["nativeName"]) ?
                                (
                                    (countryDetails["name"]["nativeName"]["eng"]) ? (countryDetails["name"]["nativeName"]["eng"]["common"]) :
                                    (Object.values(countryDetails["name"]["nativeName"]).slice(-1)[0]["common"])
                                ) : "NA"}
                                </p>

                                <p className='text-md mb-1'><strong>Population: </strong>{countryDetails["population"]}</p>

                                <p className='text-md mb-1'><strong>Region: </strong>{countryDetails["region"]}</p>

                                <p className='text-md mb-1'><strong>Sub Region: </strong>
                                {(countryDetails["subregion"]) ? (countryDetails["subregion"]) : "NA"}</p>

                                <p className='text-md mb-1'><strong>Capital: </strong>
                                {(countryDetails["capital"]) ? (countryDetails["capital"]) : "NA"}</p>
                            </div>

                            <div>
                                {(countryDetails["tld"]) &&
                                (<p className='text-md mb-1'><strong>Top Level Domain: </strong>{countryDetails["tld"][0]}</p>)}
                                
                                
                                <p className='text-md mb-1'><strong>Currencies: </strong>{(countryDetails.currencies) ? (Object.values(countryDetails.currencies).map((currency, index) => {
                                    
                                    if(index === Object.values(countryDetails.currencies).length - 1)
                                    {
                                        return currency["name"];
                                    }
                                    else
                                    {
                                        return currency["name"]+", ";
                                    }
                                    
                                })) : ("NA")}</p>

                                <div></div>
                            </div>

                            <div></div>
                            
                        </div>
                    </div>
                ): (<div>Loading the details...</div>)}
            </main>
        </div>
    );
}

export default CountryDetailsPage;