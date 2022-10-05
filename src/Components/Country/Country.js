import React from 'react';
import './Country.css'


const Country = (props) => {
    const {name,flag,population,region,capital,area}=props.country;
    const detailStyle = {color:'darkgreen'};
    const handleAddCountry = props.handleAddCountry;
        return (
        <div className='country-container'>
         <div className='image'>
           <img src={flag} alt="flage" />
         </div>
         <div className='country-details'style={detailStyle}>
           <h2>Country Name: {name}</h2>
           <p>City: {capital}</p>
           <p>Region: {region}</p>
           <p>Area: {area}</p>
           <p>Population: {population}</p>
           <button onClick={() => handleAddCountry(props.country)}>Add country</button>
         </div>
        </div>
    );
};

export default Country;