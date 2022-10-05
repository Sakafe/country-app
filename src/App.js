import './App.css';
import React, {useEffect, useState} from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
//{...country}
function App() {
  const [countries,setCountries] = useState([]);
  const[cart,setCart] = useState([]);
  const handleAddCountry = (country)=> {
    const newCart = [...cart,country];
    setCart(newCart);
  };
  //getData
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
  },[])
  console.log(countries.name);
  return (
   <div className='container'>
    <h1 className='header'>Country loaded:{countries.length}</h1>
    <h4 className='header'>Country added:{cart.length}</h4>
    <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
      }
   </div>
  );
}

export default App;
