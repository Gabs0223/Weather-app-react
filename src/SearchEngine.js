import Icon from "./Icon";
import CurrentCity from "./CurrentCity";
import Fecha from "./Fecha";
import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchEngine.css";

export default function Search() {
  let [temp, setTemp] = useState(null);
  let [desc, setDesc] = useState(null);
  let [hum, setHum] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState("");

  function showWeather(response) {
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  function submitW(event) {
    event.preventDefault();
    let apiKey = `0f228e3e7aa18774ac951c893270d5e1`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  function updateName(event) {
    setCity(event.target.value);
  }
  return (
    <Container className="upperBorder">
      <Row>
        <Col className="derecha">
          <h1 className="cityName">{city}</h1>
          <Fecha />
          <form onSubmit={submitW}>
            <Row className="searchForm">
              <Col>
                <input id="searchBar" type="search" onChange={updateName} />
              </Col>
              <Col>
                <input id="lens" type="submit" value="Search🔍" />
              </Col>
            </Row>
          </form>
          <br />
          <CurrentCity />
        </Col>
        <Col>
          <Row>
            <Col>
              <Icon sizeI="100" description={desc} />
              <h2 className="weatherInfo">{desc}</h2>
            </Col>
            <Col>
              <h1 className="weatherInfo">{Math.round(temp)}°C</h1>
              <h3 className="weatherInfo">{wind} km/h</h3>
              <h3 className="weatherInfo">{hum} %</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
