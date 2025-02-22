import React from 'react';
import {Link} from 'react-router-dom';
import useCustomContext from "../CustomContext";

const CountryCard = ({country}) => {

  const id = country['cca3'];
  const flag = country['flags']['png'];
  const name = country["name"]["common"];
  const population = country["population"];
  const region = country["region"];
  const capital = country["capital"];

  const {modeToggle, setCountryDetails} = useCustomContext();

  return (
    <Link to={`/country/${id}`}>
      <div className={`${modeToggle === 'Dark' ? 'bg-dark-blue' : 'bg-white'} cursor-pointer h-96 w-80 shadow-lg rounded-lg`} onClick={()=>setCountryDetails(country)}>
          <div className="bg-cover bg-center h-1/2 rounded-t-lg" style={{ backgroundImage: `url(${flag})`}}></div>
          <div className='h-1/2 py-7 px-5'>
              <h1 className='text-xl font-bold mb-4'>{name}</h1>
              <p className='text-md mb-1'><strong>Population: </strong>{population}</p>
              <p className='text-md mb-1'><strong>Region: </strong>{region}</p>
              <p className='text-md mb-1'><strong>Capital: </strong>{(capital && capital.length>1) ? (capital.map((city, index) => <span key={index}>{city+" "}</span>)) : capital}</p>
          </div>
      </div>
    </Link>
  )
}

export default CountryCard;