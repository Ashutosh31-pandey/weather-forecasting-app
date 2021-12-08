import React from 'react';
import CitySelector from './Components/CitySelector';
import WeatherCard from './Components/WeatherCard';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './Hooks/UseFetch'
import {API_KEY, API_BASE_URL} from './apis/config';

const App = () => {
  // destructure the returned values
  const {data, error, isLoading, setUrl} = UseFetch();

  return (
    <Container className="App">
        <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
    </Container>
  );
};

export default App;