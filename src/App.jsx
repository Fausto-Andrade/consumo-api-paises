
import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import CountryCard from './components/CountryCard';

function App() {

  const [country, setCountry] = useState();
  const [search, setSearch] = useState('colombia');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${search}`;
    axios.get(url)
      .then(res => {
        setHasError(false);
        setCountry(res.data[0]);
      })
      .catch(err => {
        setHasError(true);
        console.log(err);
      })
      .finally(()=>{
        // setTimeout(() => {
          setIsLoading(false);
        // }, 2000);
      })
  }, [search]);

  const textInput = useRef();

  const handleSubmit = event => {     
    event.preventDefault(); // Evitar que se recargue la pagina
    setSearch(textInput.current.value.toLowerCase().trim());
  }

  return (
    <div className='app'>
      <h1>Api de países</h1>
      <form onSubmit={handleSubmit} className='formulario'>
        <input type="text" ref={textInput} />
        <button>Buscar País</button>
      </form>
      {
        isLoading ?
         <h2>Loading...</h2>
         :
          hasError ?
            <h2>{search} Este país no existe</h2>
          :
            <CountryCard
              country={country}
            />
      }
    </div>
  )
}

export default App;
