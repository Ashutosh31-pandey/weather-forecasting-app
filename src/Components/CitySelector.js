import React, { useState } from "react";
import { Row, Collapse, FormControl, Button, Col } from "react-bootstrap";
import { API_KEY, API_BASE_URL } from "../apis/config";


const CitySelector = () => {

      const onSearch = () => {
            fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((result) => console.log(result));
      };

      const [city, setCity] = useState('');
      return(
            <>
            <Row>
                  <Col>
                        <h1>Search your city</h1>
                  </Col>
            </Row>

            <Row>
                 {/* xs={4} takes the one third  of the page*/}
                  <Col xs={4} className = "text-center">
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
                        <Button onClick = {onSearch}>Check Weather</Button>
                  </Col>
            </Row>
      </>
      ); 
};

export default CitySelector;