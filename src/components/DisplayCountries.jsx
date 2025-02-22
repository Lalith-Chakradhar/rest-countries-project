import React, { useEffect } from "react";
import useCustomContext from "../CustomContext";
import {Link} from 'react-router-dom';
import CountryCard from "./CountryCard";

const DisplayCountries = () => {
  const {modeToggle, countriesData, fetchCountries } = useCustomContext();

  useEffect(() => fetchCountries, []);

  return (
    <div className="flex flex-wrap gap-16 justify-center mx-4 lg:w-[98%] lg:justify-evenly">
      {(countriesData) ? (
        (countriesData.length>0) ? (
          countriesData.map((country) => {
            return (
              <Link key={country['cca3']} to={`/country/${country['cca3']}`}>
                <CountryCard
                  country={country}
                />
              </Link>
            );
          })
        ) : <div className={`${modeToggle === 'Dark' ? 'text-white' : 'text-dark-blue'} text-xl lg:text-5xl text-center mt-14`}>The countries with the specified search term were not found</div>
      ) : (
        <div className={`${modeToggle === 'Dark' ? 'text-white' : 'text-dark-blue'} text-xl lg:text-5xl text-center mt-14`}>Fetching data from the server...</div>
      )}
    </div>
  );
};

export default DisplayCountries;
