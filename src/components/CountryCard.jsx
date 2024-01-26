import React from 'react';

const CountryCard = ({country}) => {

    console.log(country);

  return (
    <article>
        <header>
            <img
                src={country?.flags.svg}
                alt={country?.flags.alt}
                />
        </header>
        <h2>{country?.name.common}</h2>
        <ul>
          <li>Capital: {country?.capital}</li>
          <li>Población: {country?.population} habitantes</li>
          <li>Continente: {country?.subregion}</li>
          <li>Area: {country?.area} km<sup>2</sup></li>
        </ul>
    </article>
  )
}

export default CountryCard;