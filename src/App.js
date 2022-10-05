import './App.css';
import React, {useEffect, useState} from 'react';
import Country from './Components/Country/Country';
//{...country}
function App() {
  const [countries,setCountries] = useState([]);
  const handleAddCountry = (country)=> {console.log("added",country)};
  //getData
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  },[])
  console.log(countries.name);
  return (
   <div className='container'>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
      }
   </div>
  );
}

export default App;
