import React, { useState } from 'react';
import { Row, Col, FormControl, Button} from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from "../apis/config";

const CitySelector = ({onSearch}) => {
      const [city, setCity] = useState('');
      const [results, setResults] = useState(null);

      onSearch = () => {
            fetch(
              `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            )
              .then((response) => response.json())
              // update the results
              .then((results) => setResults(results));
          };

      return(
            <>
            <Row>
                  <Col>
                        <h1>Search your city</h1>
                  </Col>
            </Row>

            <Row>
                 {/* xs={4} takes the one third  of the page*/}
                  <Col xs={4}>
                        <FormControl
                              placeholder ="Enter City"
                              //update city value with the users input
                              onChange = {(event) => setCity(event.target.value)}
                              //value will be the currently selected city
                              value = {city}
                        />
                  </Col> 
            </Row>

            <Row>
                  <Col>
                        {/* Event handler for button click */}
                        <Button onClick={() => onSearch(city)}>Check Weather</Button>
                  </Col>
            </Row>
      </>
      ); 
};

export default CitySelector;