import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap"
import Graphic from "./Graphic";
import CardsNextDays from "./CardsNextDays";

const SingleCardCityWeather = () => {

const cityData = useSelector ((state) => state.cityData)
const nextDays = useSelector ((state) => state.nextDays)

    return (
        <>
<div id="div-head">
    
          <Container className="d-flex flex-column mt-5  align-items-center" >
            <Row className="mb-3">
              <Col>
                <h2>Forecast for today:</h2>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex colonna ">
                <h1>{cityData.cityData.name}, {cityData.cityData.sys.country}</h1>
                <h1 className="ms-4">{cityData.cityData.main.temp.toFixed(0)}°</h1>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center ">
                <h3 style={{ marginTop: '15px' }}>{cityData.cityData.weather[0].main}</h3>
                <img style={{ width: '100px', marginLeft: '10px' }} src={`./src/assets/icons/${cityData.cityData.weather[0].icon}.png`} />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex flex-column align-items-center colonna">
                <h5>Min: {cityData.cityData.main.temp_min.toFixed(0)}° / Max: {cityData.cityData.main.temp_max.toFixed(0)}° </h5>
                <h5>Feels like: {cityData.cityData.main.feels_like.toFixed(0)}°</h5>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center colonna">
                <h5>Umidity: {cityData.cityData.main.humidity.toFixed(0)}%</h5>

              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-column colonna align-items-center">
                <h5>Pressure: {cityData.cityData.main.pressure} hPa </h5>
                <h5>Wind: {cityData.cityData.wind.speed} Km/h</h5>
              </Col>
            </Row>
          </Container>
          <div id="container-grafico">
            <Container className="d-flex flex-column align-items-center mt-5">
              <h3 className="h3">Temperatures over the next 3 days: </h3>
              <Graphic />
            </Container>
          </div>
        </div>
        <Row className="align-items-center px-3 " style={{ marginTop: '10vh' }}>
          <h3 id="forecast-title" className="h3" >Forecast for the next hours: </h3>
          {nextDays.nextDays.list.map((nextday) => (
            <CardsNextDays nextDay={nextday} key={nextday.dt_txt} />
          ))}
        </Row>
        </>
        ) 

}
export default SingleCardCityWeather